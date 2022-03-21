/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Modal,
    Box,
    TextField,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import { getReadDate } from 'functions/functions';
import {
    TableCellCalendar,
    styleModal,
    ButtonPrimary,
} from 'style/otherStyles';
import { CalendarModal } from 'components/Cabinet/Calendar/CalendarModal';
import { AccountHeader } from 'components/Cabinet/AccountHeader';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { BookingState } from 'types/Cabinet';

export const Calendar: React.FC = () => {
    const [date, setDate] = React.useState<Date>(new Date());
    const [open, setOpen] = React.useState<boolean>(false);
    const [modal, setModal] = React.useState<BookingState>({
        namePlatform: '',
        nameClient: '',
        phone: '',
        price: '',
        product: '',
        time: '',
        _id: '',
        date: '',
        comment: '',
    });
    const { fetchCalendar } = useActions();

    useEffect(() => {
        if (localStorage.token) {
            fetchCalendar(localStorage.token, getReadDate(date));
        } else {
            alert('Войдите в аккаунт');
            setTimeout(() => {
                window.location.replace('http://localhost:3000/login');
            }, 1000);
        }
    }, [date]);
    const { data } = useTypedSelector((state) => state.data);

    function createData(hour: string, id: number) {
        return { hour, id };
    }
    const rows: {hour: string; id: number}[] = [];
    const tableRows = () => {
        for (let i = 0; i < 24; i++) {
            rows.push(createData(`${i}:00`, i));
        }
    };
    tableRows();

    return (
        <Box>
            <AccountHeader />
            <Container maxWidth="xl" sx={{ pt: '100px', textAlign: 'left' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Дата"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue!);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <TableContainer component={Paper} sx={{ mt: '15px' }}>
                    <Table sx={{ minWidth: 290 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#ebeff2' }}>
                                <TableCellCalendar>Время</TableCellCalendar>
                                {data.platforms ? (
                                    data.platforms.map(
                                        (platform: {
                                            namePlatform: string;
                                        }) => (
                                            <TableCellCalendar
                                                key={platform.namePlatform}
                                            >
                                                {platform.namePlatform}
                                            </TableCellCalendar>
                                        )
                                    )
                                ) : (
                                    <TableCellCalendar>
                                        Площадки не найдены
                                    </TableCellCalendar>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .filter((e: { hour: string; id: number }) => e)
                                .map((row: { hour: string; id: number }) => (
                                    <TableRow
                                        key={row.hour}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCellCalendar
                                            component="th"
                                            scope="row"
                                        >
                                            {row.hour}
                                        </TableCellCalendar>
                                        {data.platforms &&
                                            data.platforms.map(
                                                (platform: {
                                                    namePlatform: string;
                                                }) => (
                                                    <TableCellCalendar
                                                        key={
                                                            row.hour +
                                                            platform.namePlatform
                                                        }
                                                    >
                                                        {data.booking.map(
                                                            (
                                                                booking: BookingState
                                                            ) => {
                                                                if (
                                                                    platform.namePlatform ===
                                                                        booking.namePlatform &&
                                                                    row.hour ===
                                                                        booking.time
                                                                ) {
                                                                    return (
                                                                        <ButtonPrimary
                                                                            key={
                                                                                booking._id
                                                                            }
                                                                            sx={{
                                                                                textTransform:
                                                                                    'lowercase',
                                                                            }}
                                                                            onClick={() => {
                                                                                setOpen(
                                                                                    true
                                                                                );
                                                                                setModal(
                                                                                    booking
                                                                                );
                                                                            }}
                                                                        >
                                                                            {
                                                                                booking.nameClient
                                                                            }
                                                                            <br />
                                                                            {
                                                                                booking.product
                                                                            }
                                                                        </ButtonPrimary>
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                    </TableCellCalendar>
                                                )
                                            )}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            {open && (
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ overflow: 'scroll' }}
                >
                    <Box sx={styleModal}>
                        <CalendarModal
                            namePlatform={modal.namePlatform}
                            nameClient={modal.nameClient}
                            phone={modal.phone}
                            price={modal.price}
                            product={modal.product}
                            time={modal.time}
                            _id={modal._id}
                            date={modal.date}
                            comment={modal.comment}
                        />
                    </Box>
                </Modal>
            )}
        </Box>
    );
};

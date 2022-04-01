/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    Button,
    InputLabel,
    TextField,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';
import { ProductsState } from 'types/Cabinet';
import {
    InputTitle,
    FormModal,
    ButtonPrimary,
    TableCellCalendar,
} from 'style/otherStyles';
import { TitleInfo, Title } from 'style/search/bookingModal';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { BookingModalProps, BookingState, ClientState } from 'types/Search';
import { getReadDate } from 'functions/functions';

export const BookingModal: React.FC<BookingModalProps> = ({
    idPlace,
    idPlatform,
    nameCompany,
    namePlatform,
    products,
}) => {
    const { t } = useTranslation();

    // NEXT WEEK ARRAY
    const days = [
        t('weekDays.sun'),
        t('weekDays.mon'),
        t('weekDays.tue'),
        t('weekDays.wed'),
        t('weekDays.thu'),
        t('weekDays.fri'),
        t('weekDays.sat'),
    ];
    let now = new Date();
    const hours = now.getHours();
    const time = now.getTime();
    now = new Date(time - (time % 86400000));
    const nextWeek: Date[] = [];
    for (let i = 0; i < 7; i++, now.setDate(now.getDate() + 1)) {
        nextWeek.push(new Date(now.getTime()));
    }

    const [selectProduct, setSelectProduct] = React.useState<ProductsState>({
        id: products[0].id,
        name: products[0].name,
        price: products[0].price,
        mon: products[0].mon,
        tue: products[0].tue,
        wed: products[0].wed,
        thu: products[0].thu,
        fri: products[0].fri,
        sat: products[0].sat,
        sun: products[0].sun,
    });

    // TABLE
    function createData(hour: string, price: string, id: number) {
        return { hour, price, id };
    }

    const checkTime = (possibleTime: number) => {
        for (const key in selectProduct) {
            if (key !== 'id' && key !== 'name' && key !== 'price') {
                if (
                    possibleTime <
                        +selectProduct[key as keyof typeof selectProduct].split(
                            '-'
                        )[0] ||
                    possibleTime >
                        +selectProduct[key as keyof typeof selectProduct].split(
                            '-'
                        )[1]
                ) {
                    return;
                }
                return createData(
                    `${possibleTime}:00`,
                    selectProduct.price,
                    possibleTime
                );
            }
        }
    };
    const rows: any = [];
    const tableRows = () => {
        for (let i = 0; i < 24; i++) {
            rows.push(checkTime(i));
        }
    };
    tableRows();

    // BOOk
    const [booking, setBooking] = useState<BookingState>({
        date: '',
        time: '',
        chooseProduct: selectProduct.name,
        price: selectProduct.price,
    });

    // client data
    const [clientWindow, setClientWindow] = useState<boolean>(false);
    const [client, setClient] = useState<ClientState>({
        name: '',
        comment: '',
        phone: '',
    });
    const handleChange =
        (prop: keyof ClientState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setClient({ ...client, [prop]: event.target.value });
        };
    const { postBooking, fetchCatalogPlace, getBooking } = useActions();

    const FetchBooking = (params: string) => {
        const prevParams = useRef(params);

        useEffect(() => {
            if (prevParams.current === params) {
                getBooking(params, selectProduct.name);
                prevParams.current = params;
            }
        }, [params]);
    };
    FetchBooking(idPlatform);

    const { bookingData } = useTypedSelector((state) => state.bookingData);

    return (
        <>
            <TitleInfo>
                <Box sx={{ textAlign: 'left' }}>
                    <Title sx={{ margin: '0 !important' }}>{nameCompany}</Title>
                    <Typography>{namePlatform}</Typography>
                </Box>
                <Box sx={{ minWidth: 120, maxWidth: 300 }}>
                    <FormControl fullWidth sx={{ border: 'none' }}>
                        <InputLabel
                            variant='standard'
                            sx={{
                                top: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            {t('search.bookingModal.service')}
                        </InputLabel>

                        <Select
                            id='product'
                            defaultValue={products[0].name}
                            onChange={(event: SelectChangeEvent) => {
                                const selectInInput = products.filter(
                                    (item: ProductsState) => {
                                        if (item.name === event.target.value) {
                                            return item;
                                        }
                                        return false;
                                    }
                                )[0];
                                setSelectProduct(selectInInput);
                                setBooking({
                                    date: '',
                                    time: '',
                                    chooseProduct: '',
                                    price: '',
                                });
                                getBooking(idPlatform, selectInInput.name);
                            }}
                            input={<InputTitle style={{ padding: 0 }} />}
                        >
                            {products.map((item: ProductsState) => (
                                <MenuItem value={item.name} key={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    {booking.date && (
                        <Box>
                            <Typography>
                                {booking.date} {booking.time}
                            </Typography>
                            <Typography>{booking.price} ₽</Typography>
                        </Box>
                    )}
                </Box>
                <Box>
                    {clientWindow ? (
                        <ButtonPrimary onClick={() => setClientWindow(false)}>
                            {t('search.bookingModal.backButton')}
                        </ButtonPrimary>
                    ) : (
                        <ButtonPrimary
                            onClick={() => {
                                if (!booking.date) {
                                    alert('Выберите время и дату!');
                                    return;
                                }
                                setClientWindow(true);
                            }}
                        >
                            {t('search.bookingModal.nextButton')}
                        </ButtonPrimary>
                    )}
                </Box>
            </TitleInfo>

            {clientWindow ? (
                <Box>
                    <FormModal>
                        <TextField
                            id='filled-textarea'
                            label={t('search.bookingModal.formName')}
                            placeholder={t('search.bookingModal.formName')}
                            multiline
                            required
                            variant='filled'
                            value={client.name}
                            onChange={handleChange('name')}
                        />
                        <TextField
                            id='filled-multiline-static'
                            label={t('search.bookingModal.formComment')}
                            multiline
                            placeholder={t('search.bookingModal.formComment')}
                            rows={4}
                            variant='filled'
                            value={client.comment}
                            onChange={handleChange('comment')}
                        />
                        <TextField
                            id='filled-textarea'
                            label={t('search.bookingModal.formPhone')}
                            placeholder={t('search.bookingModal.formPhone')}
                            multiline
                            required
                            variant='filled'
                            value={client.phone}
                            onChange={(event) => {
                                setClient({
                                    ...client,
                                    phone: event.target.value
                                        .replace(/\D/g, '')
                                        .replace(/^[0-9]/, '+7'),
                                });
                            }}
                        />
                    </FormModal>
                    <ButtonPrimary
                        onClick={() => {
                            if (client.phone.length !== 12) {
                                alert(
                                    t(
                                        'cabinet.contentPage.mainInfo.alert.phone'
                                    )
                                );
                                return;
                            }
                            postBooking(
                                idPlace,
                                booking.date,
                                booking.time,
                                booking.chooseProduct,
                                namePlatform,
                                idPlatform,
                                booking.price,
                                client.name,
                                client.comment,
                                client.phone
                            );
                            alert(t('search.bookingModal.alert.success'));
                            fetchCatalogPlace(idPlace);
                        }}
                    >
                        {t('search.bookingModal.buttonForm')}
                    </ButtonPrimary>
                </Box>
            ) : (
                // TABLE
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                            <TableHead>
                                <TableRow>
                                    <TableCellCalendar>
                                        {t('cabinet.calendar.time')}
                                    </TableCellCalendar>
                                    {nextWeek.map((dayWeek: Date) => (
                                        <TableCellCalendar
                                            align='center'
                                            key={days[dayWeek.getDay()]}
                                        >
                                            {days[dayWeek.getDay()]}
                                            <br />
                                            {dayWeek.getDate()}
                                        </TableCellCalendar>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .filter(
                                        (e: {
                                            hour: string;
                                            price: string;
                                            id: number;
                                        }) => e
                                    )
                                    .map(
                                        (row: {
                                            hour: string;
                                            price: string;
                                            id: number;
                                        }) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{
                                                    '&:last-child td, &:last-child th':
                                                        {
                                                            border: 0,
                                                        },
                                                }}
                                            >
                                                <TableCellCalendar
                                                    component='th'
                                                    scope='row'
                                                >
                                                    {row.hour}
                                                </TableCellCalendar>
                                                {nextWeek.map((day: Date) => (
                                                    <TableCellCalendar
                                                        align='center'
                                                        key={day.getDate()}
                                                    >
                                                        {bookingData.some(
                                                            (
                                                                item: BookingState
                                                            ) =>
                                                                (+item.date.split(
                                                                    '/'
                                                                )[0] ===
                                                                    day.getDate() &&
                                                                    item.time ===
                                                                        row.hour) ||
                                                                (+hours + 3 >=
                                                                    +row.hour.split(
                                                                        ':'
                                                                    )[0] &&
                                                                    nextWeek[0] ===
                                                                        day)
                                                        ) ? (
                                                            <Button disabled>
                                                                {t(
                                                                    'search.bookingModal.bookingTable'
                                                                )}
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                onClick={() => {
                                                                    setBooking({
                                                                        ...booking,
                                                                        date: getReadDate(
                                                                            day
                                                                        ),
                                                                        time: row.hour,
                                                                        chooseProduct:
                                                                            selectProduct.name,
                                                                        price: selectProduct.price,
                                                                    });
                                                                }}
                                                            >
                                                                {row.price}
                                                            </Button>
                                                        )}
                                                    </TableCellCalendar>
                                                ))}
                                            </TableRow>
                                        )
                                    )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </>
    );
};

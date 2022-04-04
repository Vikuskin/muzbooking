/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    SelectChangeEvent,
} from '@mui/material';
import { TitleInfoBookingModal } from 'components/Search/BookingModal/TitleInfoBookingModal';
import { FormBookingModal } from 'components/Search/BookingModal/FormBookingModal';
import { ProductsState } from 'types/Cabinet';
import { TableCellCalendar } from 'style/otherStyles';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { BookingModalProps, BookingState } from 'types/Search';
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
    const showClientWindow = () => {
        setClientWindow(true);
    };
    const hideClientWindow = () => {
        setClientWindow(false);
    };

    const { getBooking } = useActions();

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

    const handleChangeSelectProduct = (event: SelectChangeEvent) => {
        const selectInInput = products.filter((item: ProductsState) => {
            if (item.name === event.target.value) {
                return item;
            }
            return false;
        })[0];
        setSelectProduct(selectInInput);
        setBooking({
            date: '',
            time: '',
            chooseProduct: '',
            price: '',
        });
        getBooking(idPlatform, selectInInput.name);
    };

    return (
        <>
            <TitleInfoBookingModal
                nameCompany={nameCompany}
                namePlatform={namePlatform}
                handleChangeSelectProduct={handleChangeSelectProduct}
                booking={booking}
                products={products}
                clientWindow={clientWindow}
                showClientWindow={showClientWindow}
                hideClientWindow={hideClientWindow}
            />
            {clientWindow ? (
                <FormBookingModal
                    idPlace={idPlace}
                    booking={booking}
                    namePlatform={namePlatform}
                    idPlatform={idPlatform}
                />
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

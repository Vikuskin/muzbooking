/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { AccountHeader } from 'components/Cabinet/AccountHeader';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

export const Calendar: React.FC = () => {
    const { fetchOrders } = useActions();
    useEffect(() => {
        if (localStorage.token) {
            fetchOrders(localStorage.token);
        } else {
            alert('Войдите в аккаунт');
            setTimeout(() => {
                window.location.replace('http://localhost:3000/login');
            }, 1000);
        }
    }, []);
    const { data } = useTypedSelector((state) => state.data);
    console.log(data.place);
    return (
        <Box>
            <AccountHeader />
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    
                                    
                                </TableRow>
                            </TableHead>
                            {/* <TableBody>
                                {rows
                                    .filter((e: any) => e)
                                    .map(
                                        (row: {
                                            hour: string;
                                            price: string;
                                        }) => (
                                            <TableRow
                                                key={row.hour}
                                                sx={{
                                                    '&:last-child td, &:last-child th':
                                                        {
                                                            border: 0,
                                                        },
                                                }}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {row.hour}
                                                </TableCell>
                                                {nextWeek.map((day: Date) => (
                                                    <TableCell align="center">
                                                        {bookingData.some(
                                                            (
                                                                item: BookingState
                                                            ) =>
                                                                +item.date.split(
                                                                    '/'
                                                                )[0] ===
                                                                    day.getDate() &&
                                                                item.time ===
                                                                    row.hour
                                                        ) ? (
                                                            <Button disabled>
                                                                Бронь
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
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        )
                                    )}
                            </TableBody> */}
                        </Table>
                    </TableContainer>
                    </Box>
        </Box>
    );
};

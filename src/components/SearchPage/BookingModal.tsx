/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

import React from 'react';
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import { StateProducts } from 'components/Cabinet/ContentPage/ContentPagePlatform';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { InputTitle } from 'style/otherStyles';

interface Props {
    namePlatform: string;
    products: Array<StateProducts>;
}

export const BookingModal: React.FC<Props> = ({ namePlatform, products }) => {
   // NEXT WEEK ARRAY
   const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
    let now = new Date();
    const time = now.getTime();
    now = new Date(time - (time % 86400000));
    const nextWeek = [];
    for (let i = 0; i < 7; i++, now.setDate(now.getDate() + 1)) {
        nextWeek.push(new Date(now.getTime()));
    }
    const [product, setProduct] = React.useState('');

    function createData(
        hour: string,
        price: string
    ) {
        return { hour, price};
    }

    const rows = [
        createData('00:00', products[0].price),
        createData('01:00', products[0].price),
        createData('02:00', products[0].price),
        createData('03:00', products[0].price),
        createData('04:00', products[0].price),
        createData('05:00', products[0].price),
        createData('06:00', products[0].price),
        createData('07:00', products[0].price),
        createData('08:00', products[0].price),
        createData('09:00', products[0].price),
        createData('10:00', products[0].price),
        createData('11:00', products[0].price),
        createData('12:00', products[0].price),
        createData('13:00', products[0].price),
        createData('14:00', products[0].price),
        createData('15:00', products[0].price),
        createData('16:00', products[0].price),
        createData('17:00', products[0].price),
        createData('18:00', products[0].price),
        createData('19:00', products[0].price),
        createData('20:00', products[0].price),
        createData('21:00', products[0].price),
        createData('22:00', products[0].price),
        createData('23:00', products[0].price),
    ];

    return (
        <Box>
            {namePlatform}
            <Box sx={{ minWidth: 120, maxWidth: 300, margin: 'auto' }}>
                <FormControl fullWidth sx={{ border: 'none' }}>
                    <Select
                        id="service"
                        defaultValue={products[0].name}
                        onChange={(event: SelectChangeEvent) => {
                            setProduct(event.target.value);
                        }}
                        input={<InputTitle />}
                    >
                        {products.map((item: any) => (
                            <MenuItem value={item.name} key={item._id}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Время</TableCell>
                            {nextWeek.map((dayWeek: any) => (
                                <TableCell align="center">
                                    {days[dayWeek.getDay()]}<br/>
                                    {dayWeek.getDate()}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.hour}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.hour}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

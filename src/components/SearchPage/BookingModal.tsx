/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

import React, { useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    Button,
    InputLabel,
    styled,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';
import { StateProducts } from 'components/Cabinet/ContentPage/ContentPagePlatform';
import {
    ContentPageButton,
    FlexDiv,
    InputTitle,
    TitleH1,
    input,
} from 'style/otherStyles';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';

interface Props {
    idPlace: string;
    idPlatform: string;
    nameCompany: string;
    namePlatform: string;
    products: Array<StateProducts>;
}

interface Booking {
    date: string;
    time: string;
    chooseProduct: string;
    price: string;
}
interface StateClient {
    name: string;
    comment: string;
    phone: string;
}

const ButtonBooking = styled(Button)({
    backgroundColor: '#f79521',
    color: 'white',
    textTransform: 'uppercase',
    borderRadius: '5px',
    padding: '5px 25px',
});

const ClientForm = styled('div')({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
    padding: '20px',
    border: '2px solid #e2e2e2',
    borderRadius: '4px',
    backgroundColor: '#ebeff2',
    marginBottom: '30px',
});

export const BookingModal: React.FC<Props> = ({
    idPlace,
    idPlatform,
    nameCompany,
    namePlatform,
    products,
}) => {
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
    const nextWeek: any[] = [];
    for (let i = 0; i < 7; i++, now.setDate(now.getDate() + 1)) {
        nextWeek.push(new Date(now.getTime()));
    }
    const getReadDate = (date: any) =>
        `${`0${date.getDate()}`.slice(-2)}/${`0${date.getMonth() + 1}`.slice(
            -2
        )}/${date.getFullYear()}`;

    const [selectProduct, setSelectProduct] = React.useState<StateProducts>({
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
    console.log(selectProduct);

    // TABLE
    function createData(hour: string | null, price: string | null) {
        return { hour, price };
    }

    const checkTime = (possibleTime: any) => {
        for (const key in selectProduct) {
            if (key !== 'id' && key !== 'name' && key !== 'price') {
                if (
                    +possibleTime.split(':')[0] <
                        +selectProduct[key as keyof typeof selectProduct].split(
                            '-'
                        )[0] ||
                    +possibleTime.split(':')[0] >
                        +selectProduct[key as keyof typeof selectProduct].split(
                            '-'
                        )[1]
                ) {
                    return;
                }
                return createData(possibleTime, selectProduct.price);
            }
        }
    };

    const rows = [
        checkTime('00:00'),
        checkTime('01:00'),
        checkTime('02:00'),
        checkTime('03:00'),
        checkTime('04:00'),
        checkTime('05:00'),
        checkTime('06:00'),
        checkTime('07:00'),
        checkTime('08:00'),
        checkTime('09:00'),
        checkTime('10:00'),
        checkTime('11:00'),
        checkTime('12:00'),
        checkTime('13:00'),
        checkTime('14:00'),
        checkTime('15:00'),
        checkTime('16:00'),
        checkTime('17:00'),
        checkTime('18:00'),
        checkTime('19:00'),
        checkTime('20:00'),
        checkTime('21:00'),
        checkTime('22:00'),
        checkTime('23:00'),
    ].filter((e) => e);

    // BOOk
    const [booking, setBooking] = useState<Booking>({
        date: '',
        time: '',
        chooseProduct: selectProduct.name,
        price: selectProduct.price,
    });
    console.log(booking);

    // client data
    const [clientWindow, setClientWindow] = useState<boolean>(false);
    const [client, setClient] = useState<StateClient>({
        name: '',
        comment: '',
        phone: '',
    });
    const handleChange =
        (prop: keyof StateClient) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setClient({ ...client, [prop]: event.target.value });
        };
    const { postBooking, fetchCatalogPlace, getBooking } = useActions();

    useEffect(() => {
        getBooking(idPlatform)
    }, [])
    const { bookingData, loading } = useTypedSelector((state) => state.bookingData);
    console.log(bookingData)
    return (
        <>
            <FlexDiv sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ textAlign: 'left' }}>
                    <TitleH1 sx={{ m: 0 }}>{nameCompany}</TitleH1>
                    <Typography>{namePlatform}</Typography>
                </Box>
                <Box sx={{ minWidth: 120, maxWidth: 300 }}>
                    <FormControl fullWidth sx={{ border: 'none' }}>
                        <InputLabel
                            variant="standard"
                            sx={{
                                top: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            Вид работ
                        </InputLabel>

                        <Select
                            id="product"
                            defaultValue={products[0].name}
                            onChange={(event: SelectChangeEvent) => {
                                // eslint-disable-next-line consistent-return
                                setSelectProduct(
                                    products.filter((item: any) => {
                                        if (item.name === event.target.value) {
                                            return item;
                                        }
                                    })[0]
                                );
                                setBooking({
                                    date: '',
                                    time: '',
                                    chooseProduct: '',
                                    price: '',
                                });
                            }}
                            input={<InputTitle style={{ padding: 0 }} />}
                        >
                            {products.map((item: any) => (
                                <MenuItem value={item.name} key={item._id}>
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
                        <ButtonBooking onClick={() => setClientWindow(false)}>
                            Назад
                        </ButtonBooking>
                    ) : (
                        <ButtonBooking
                            onClick={() => {
                                if (!booking.date) {
                                    alert('Выберите время и дату!');
                                    return;
                                }
                                setClientWindow(true);
                            }}
                        >
                            Далее
                        </ButtonBooking>
                    )}
                </Box>
            </FlexDiv>

            {clientWindow ? (
                <Box>
                    <ClientForm>
                        <TextField
                            id="filled-textarea"
                            label="*На чьё имя будет заказ"
                            placeholder="*На чьё имя будет заказ"
                            multiline
                            variant="filled"
                            value={client.name}
                            onChange={handleChange('name')}
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Добавьте свой комментарий для заказа"
                            multiline
                            placeholder="Добавьте свой комментарий для заказа"
                            rows={4}
                            variant="filled"
                            value={client.comment}
                            onChange={handleChange('comment')}
                        />
                        <TextField
                            id="filled-textarea"
                            label="*Контактный номер телефона"
                            placeholder="*Контактный номер телефона"
                            multiline
                            variant="filled"
                            value={client.phone}
                            onChange={handleChange('phone')}
                        />
                    </ClientForm>
                    <ButtonBooking
                        onClick={() => {
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
                            alert('Заявка успешно оформлена');
                            fetchCatalogPlace(idPlace)                          
                        }}
                    >
                        Оставить заявку
                    </ButtonBooking>
                </Box>
            ) : (
                // TABLE
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Время</TableCell>
                                    {nextWeek.map((dayWeek: any) => (
                                        <TableCell align="center">
                                            {days[dayWeek.getDay()]}
                                            <br />
                                            {dayWeek.getDate()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row: any) => (
                                    <TableRow
                                        key={row.hour}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.hour}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => {
                                                    setBooking({
                                                        ...booking,
                                                        date: getReadDate(
                                                            nextWeek[0]
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
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => {
                                                    setBooking({
                                                        ...booking,
                                                        date: getReadDate(
                                                            nextWeek[1]
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
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => {
                                                    setBooking({
                                                        ...booking,
                                                        date: getReadDate(
                                                            nextWeek[2]
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
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => {
                                                    setBooking({
                                                        ...booking,
                                                        date: getReadDate(
                                                            nextWeek[3]
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
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => {
                                                    setBooking({
                                                        ...booking,
                                                        date: getReadDate(
                                                            nextWeek[4]
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
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => {
                                                    setBooking({
                                                        ...booking,
                                                        date: getReadDate(
                                                            nextWeek[5]
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
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={() => {
                                                    setBooking({
                                                        ...booking,
                                                        date: getReadDate(
                                                            nextWeek[6]
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
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </>
    );
};

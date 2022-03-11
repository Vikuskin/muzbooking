/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
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
import { ProductsState } from 'types/Cabinet';
import { FlexDiv, InputTitle, TitleH1 } from 'style/otherStyles';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { BookingModalProps, BookingState, ClientState } from 'types/Search';

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

export const BookingModal: React.FC<BookingModalProps> = ({
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
    const nextWeek: Date[] = [];
    for (let i = 0; i < 7; i++, now.setDate(now.getDate() + 1)) {
        nextWeek.push(new Date(now.getTime()));
    }
    const getReadDate = (date: Date) =>
        `${`0${date.getDate()}`.slice(-2)}/${`0${date.getMonth() + 1}`.slice(
            -2
        )}/${date.getFullYear()}`;

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
    function createData(hour: string, price: string) {
        return { hour, price };
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
                return createData(`${possibleTime}:00`, selectProduct.price);
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

    useEffect(() => {
        getBooking(idPlatform, selectProduct.name);
    }, [idPlatform]);
    const { bookingData } = useTypedSelector((state) => state.bookingData);
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
                            onChange={(event) => {
                                setClient({
                                    ...client,
                                    phone: event.target.value
                                        .replace(/\D/g, '')
                                        .replace(/^[0-9]/, '+7')
                                        .replace(/^(\S{13,})?$/, ''),
                                });
                            }}
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
                            fetchCatalogPlace(idPlace);
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
                                    {nextWeek.map((dayWeek: Date) => (
                                        <TableCell align="center">
                                            {days[dayWeek.getDay()]}
                                            <br />
                                            {dayWeek.getDate()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
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
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </>
    );
};

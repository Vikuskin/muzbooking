import React, { useEffect, useState, useMemo } from 'react';
import {
    Box,
    Container,
    useTheme,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TablePagination,
    TableRow,
    Paper,
    IconButton,
    TableHead,
    TableSortLabel,
} from '@mui/material';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
    LastPage,
    FirstPage,
} from '@mui/icons-material';
import { AccountHeader } from 'components/Cabinet/AccountHeader';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { TableCellCenter } from 'style/otherStyles';
import { TablePaginationActionsProps, BookingState } from 'types/Cabinet';

const TablePaginationActions = (props: TablePaginationActionsProps) => {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
            </IconButton>
        </Box>
    );
};

export const Orders: React.FC = () => {
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

    // TABLE
    function createData(
        nameClient: string,
        date: string,
        namePlatform: string,
        price: string,
        product: string,
        comment: string,
        time: string,
        _id: string,
        phone: string
    ) {
        return {
            nameClient,
            date,
            namePlatform,
            price,
            product,
            comment,
            time,
            _id,
            phone,
        };
    }

    const rows = data[0]
        ? data
              .map((item: BookingState) =>
                  createData(
                      item.nameClient,
                      item.date,
                      item.namePlatform,
                      item.price,
                      item.product,
                      item.comment,
                      item.time,
                      item._id,
                      item.phone
                  )
              )
              .sort((a: BookingState, b: BookingState) => {
                  const date1 = new Date(
                      +a.date.split('/')[2],
                      +a.date.split('/')[1] - 1,
                      +a.date.split('/')[0],
                      +a.time.split(':')[0],
                      +a.time.split(':')[1]
                  );
                  const date2 = new Date(
                      +b.date.split('/')[2],
                      +b.date.split('/')[1] - 1,
                      +b.date.split('/')[0],
                      +b.time.split(':')[0],
                      +b.time.split(':')[1]
                  );
                  return date2.valueOf() - date1.valueOf();
              })
        : [];

    const [rowsSortDesc, setRowsSortDesc] = useState<boolean>(false);

    useMemo(() => {
        if (!rowsSortDesc) return rows;
        return rows.reverse();
    }, [rowsSortDesc, rows]);

    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box>
            <AccountHeader />
            <Container
                maxWidth="xl"
                sx={{ p: '30px', textAlign: 'left', pt: '100px' }}
            >
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 290 }}
                        aria-label="custom pagination table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCellCenter>Клиент</TableCellCenter>
                                <TableCellCenter>
                                    <TableSortLabel
                                        direction={
                                            rowsSortDesc ? 'desc' : 'asc'
                                        }
                                        onClick={() =>
                                            setRowsSortDesc(!rowsSortDesc)
                                        }
                                    >
                                        Дата
                                    </TableSortLabel>
                                </TableCellCenter>
                                <TableCellCenter>Площадка</TableCellCenter>
                                <TableCellCenter>Стоимость</TableCellCenter>
                                <TableCellCenter>Вид работ</TableCellCenter>
                                <TableCellCenter>
                                    Комментарий к заказу
                                </TableCellCenter>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                  )
                                : rows
                            ).map((row: BookingState) => (
                                <TableRow key={row._id}>
                                    <TableCellCenter component="th" scope="row">
                                        {row.nameClient}
                                        <br />
                                        {row.phone}
                                    </TableCellCenter>
                                    <TableCellCenter align="right">
                                        {row.date}
                                        <br />
                                        {row.time}
                                    </TableCellCenter>
                                    <TableCellCenter align="right">
                                        {row.namePlatform}
                                    </TableCellCenter>
                                    <TableCellCenter align="right">
                                        {row.price}
                                    </TableCellCenter>
                                    <TableCellCenter align="right">
                                        {row.product}
                                    </TableCellCenter>
                                    <TableCellCenter align="right">
                                        {row.comment}
                                    </TableCellCenter>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[
                                        5,
                                        10,
                                        25,
                                        { label: 'All', value: -1 },
                                    ]}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={
                                        handleChangeRowsPerPage
                                    }
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
};

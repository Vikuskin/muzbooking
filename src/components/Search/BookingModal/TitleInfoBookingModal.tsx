import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    Typography,
} from '@mui/material';
import { InputTitle, ButtonPrimary } from 'style/otherStyles';
import { TitleInfo, Title } from 'style/search/bookingModal';
import { TitleInfoProps } from 'types/Search';
import { ProductsState } from 'types/Cabinet';

export const TitleInfoBookingModal: React.FC<TitleInfoProps> = ({
    nameCompany,
    namePlatform,
    handleChangeSelectProduct,
    booking,
    products,
    clientWindow,
    showClientWindow,
    hideClientWindow,
}) => {
    const { t } = useTranslation();

    return (
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
                            handleChangeSelectProduct(event);
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
                    <ButtonPrimary onClick={() => hideClientWindow()}>
                        {t('search.bookingModal.backButton')}
                    </ButtonPrimary>
                ) : (
                    <ButtonPrimary
                        onClick={() => {
                            if (!booking.date) {
                                alert('Выберите время и дату!');
                                return;
                            }
                            showClientWindow();
                        }}
                    >
                        {t('search.bookingModal.nextButton')}
                    </ButtonPrimary>
                )}
            </Box>
        </TitleInfo>
    );
};

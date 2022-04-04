import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon, Box, Typography } from '@mui/material';
import {
    FlexDiv,
    ContentPageListItem,
    DefaultTextValidator,
} from 'style/otherStyles';
import { TypographyTimetable } from 'style/cabinet/contentPage/contentPagePlatform';
import { ProductsState, AddPositionProps } from 'types/Cabinet';

export const AddPosition: React.FC<AddPositionProps> = ({ addProduct }) => {
    const { t } = useTranslation();

    const [product, setProduct] = React.useState<ProductsState>({
        id: Date.now().toString(),
        name: '',
        price: '',
        mon: '00-23',
        tue: '00-23',
        wed: '00-23',
        thu: '00-23',
        fri: '00-23',
        sat: '00-23',
        sun: '00-23',
    });

    const handleChangeProducts =
        (prop: keyof ProductsState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setProduct({ ...product, [prop]: event.target.value });
        };

    return (
        <ContentPageListItem sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ width: '80%' }}>
                <FlexDiv>
                    <Box
                        sx={{
                            width: { sm: '100%', md: '50%' },
                            mr: '10px',
                        }}
                    >
                        <Typography>
                            {t('cabinet.contentPage.platform.namePositions')}
                        </Typography>
                        <Box
                            sx={{
                                width: { sm: '100%', md: '50%' },
                                mb: '30px',
                            }}
                        >
                            {DefaultTextValidator(
                                product.name,
                                handleChangeProducts('name'),
                                ['isString'],
                                [t('validation.error.text')]
                            )}
                        </Box>
                    </Box>

                    <Box sx={{ width: { sm: '100%', md: '50%' } }}>
                        <Typography>
                            {t('cabinet.contentPage.platform.pricePositions')}
                        </Typography>
                        <Box
                            sx={{
                                width: { sm: '100%', md: '50%' },
                                mb: '30px',
                            }}
                        >
                            {DefaultTextValidator(
                                product.price,
                                handleChangeProducts('price'),
                                ['isNumber'],
                                [t('validation.error.number')]
                            )}
                        </Box>
                    </Box>
                </FlexDiv>
                <Typography>
                    {t('cabinet.contentPage.mainInfo.timetable')}
                </Typography>
                <FlexDiv>
                    <TypographyTimetable>
                        {t('weekDays.mon')}
                    </TypographyTimetable>
                    <Box sx={{ width: '70%' }}>
                        {DefaultTextValidator(
                            product.mon,
                            handleChangeProducts('mon'),
                            ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                            [t('validation.error.hours')]
                        )}
                    </Box>
                </FlexDiv>
                <FlexDiv>
                    <TypographyTimetable>
                        {t('weekDays.tue')}
                    </TypographyTimetable>
                    <Box sx={{ width: '70%' }}>
                        {DefaultTextValidator(
                            product.tue,
                            handleChangeProducts('tue'),
                            ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                            [t('validation.error.hours')]
                        )}
                    </Box>
                </FlexDiv>
                <FlexDiv>
                    <TypographyTimetable>
                        {t('weekDays.wed')}
                    </TypographyTimetable>
                    <Box sx={{ width: '70%' }}>
                        {DefaultTextValidator(
                            product.wed,
                            handleChangeProducts('wed'),
                            ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                            [t('validation.error.hours')]
                        )}
                    </Box>
                </FlexDiv>
                <FlexDiv>
                    <TypographyTimetable>
                        {t('weekDays.thu')}
                    </TypographyTimetable>
                    <Box sx={{ width: '70%' }}>
                        {DefaultTextValidator(
                            product.thu,
                            handleChangeProducts('thu'),
                            ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                            [t('validation.error.hours')]
                        )}
                    </Box>
                </FlexDiv>
                <FlexDiv>
                    <TypographyTimetable>
                        {t('weekDays.fri')}
                    </TypographyTimetable>
                    <Box sx={{ width: '70%' }}>
                        {DefaultTextValidator(
                            product.fri,
                            handleChangeProducts('fri'),
                            ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                            [t('validation.error.hours')]
                        )}
                    </Box>
                </FlexDiv>
                <FlexDiv>
                    <TypographyTimetable>
                        {t('weekDays.sat')}
                    </TypographyTimetable>
                    <Box sx={{ width: '70%' }}>
                        {DefaultTextValidator(
                            product.sat,
                            handleChangeProducts('sat'),
                            ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                            [t('validation.error.hours')]
                        )}
                    </Box>
                </FlexDiv>
                <FlexDiv>
                    <TypographyTimetable>
                        {t('weekDays.sun')}
                    </TypographyTimetable>
                    <Box sx={{ width: '70%' }}>
                        {DefaultTextValidator(
                            product.sun,
                            handleChangeProducts('sun'),
                            ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                            [t('validation.error.hours')]
                        )}
                    </Box>
                </FlexDiv>
            </Box>
            <Icon
                sx={{
                    cursor: 'pointer',
                    fontSize: { xs: 'large', md: '30px', xl: '40px' },
                }}
                onClick={() => {
                    addProduct(product);
                    setProduct({
                        id: Date.now().toString(),
                        name: '',
                        price: '',
                        mon: '00-23',
                        tue: '00-23',
                        wed: '00-23',
                        thu: '00-23',
                        fri: '00-23',
                        sat: '00-23',
                        sun: '00-23',
                    });
                }}
            >
                add_circle
            </Icon>
        </ContentPageListItem>
    );
};

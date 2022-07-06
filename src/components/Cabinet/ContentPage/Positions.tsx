import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { FlexDiv, ContentPageListItem } from 'style/otherStyles';
import { TypographyTimetable } from 'style/cabinet/contentPage/contentPagePlatform';
import { ProductsState, PositionsProps } from 'types/Cabinet';

export const Positions: React.FC<PositionsProps> = ({
    products,
    removeProduct,
}) => {
    const { t } = useTranslation();

    return (
        <Box>
            {products.map((item: ProductsState) => (
                <ContentPageListItem
                    sx={{ justifyContent: 'space-between' }}
                    key={item.id}
                >
                    <Box sx={{ width: '80%' }}>
                        <FlexDiv sx={{ alignItems: 'flex-start' }}>
                            <Box
                                sx={{
                                    width: { sm: '100%', md: '50%' },
                                    mr: '10px',
                                }}
                            >
                                <Typography>
                                    {t(
                                        'cabinet.contentPage.platform.namePositions'
                                    )}
                                </Typography>
                                <Box
                                    sx={{
                                        width: { sm: '100%', md: '50%' },
                                        mb: '30px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                            width: '100%',
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ width: { sm: '100%', md: '50%' } }}>
                                <Typography>
                                    {t(
                                        'cabinet.contentPage.platform.pricePositions'
                                    )}
                                </Typography>
                                <Box
                                    sx={{
                                        width: { sm: '100%', md: '50%' },
                                        mb: '30px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                            width: '100%',
                                        }}
                                    >
                                        {item.price}
                                    </Typography>
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
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    {item.mon}
                                </Typography>
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.tue')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    {item.tue}
                                </Typography>
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.wed')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    {item.wed}
                                </Typography>
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.thu')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    {item.thu}
                                </Typography>
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.fri')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    {item.fri}
                                </Typography>
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.sat')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    {item.sat}
                                </Typography>
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.sun')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                <Typography
                                    sx={{
                                        borderBottom: '1px solid black',
                                    }}
                                >
                                    {item.sun}
                                </Typography>
                            </Box>
                        </FlexDiv>
                    </Box>
                    <RemoveCircleIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: {
                                xs: 'large',
                                md: '30px',
                                xl: '40px',
                            },
                        }}
                        onClick={() => {
                            removeProduct(item);
                        }}
                    />
                </ContentPageListItem>
            ))}
        </Box>
    );
};

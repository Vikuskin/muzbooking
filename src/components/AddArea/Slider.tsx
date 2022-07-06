import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Button } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import logo1 from 'image/AddAreaPage/sliderLogo.png';
import logo2 from 'image/AddAreaPage/sliderLogo2.png';
import logo3 from 'image/AddAreaPage/sliderLogo3.png';
import arrowLeft from 'image/AddAreaPage/sliderArrowLeft.webp';
import arrowRight from 'image/AddAreaPage/sliderArrowRight.webp';
import { Slide } from 'style/addArea/slider';

export const Slider: React.FC = () => {
    const { t } = useTranslation();
    const myArrow = (
        type: string,
        onClick: React.MouseEventHandler | undefined
    ) => {
        const pointer =
            type === 'PREV' ? (
                <img
                    style={{ width: '40px', height: 'auto' }}
                    src={arrowLeft}
                    alt='Arrow left'
                />
            ) : (
                <img
                    style={{ width: '40px', height: 'auto' }}
                    src={arrowRight}
                    alt='Arrow right'
                />
            );
        return <Button onClick={onClick}>{pointer}</Button>;
    };
    return (
        <Carousel
            pagination={false}
            itemsToShow={1}
            isRTL={false}
            renderArrow={({ type, onClick }) => myArrow(type, onClick)}
        >
            <Slide>
                <Typography sx={{ maxWidth: '200px' }}>
                    <img src={logo1} alt='Logo' />
                </Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>{t('addArea.slider.slider1Desc1')}</Typography>
                    <Typography>{t('addArea.slider.slider1Desc2')}</Typography>
                </Box>
            </Slide>

            <Slide>
                <Typography sx={{ maxWidth: '200px' }}>
                    <img src={logo2} alt='Logo' />
                </Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>{t('addArea.slider.slider2Desc1')}</Typography>
                    <Typography>{t('addArea.slider.slider2Desc2')}</Typography>
                    <Typography>{t('addArea.slider.slider2Desc3')}</Typography>
                </Box>
            </Slide>

            <Slide>
                <Typography sx={{ maxWidth: '200px' }}>
                    <img src={logo3} alt='Logo' />
                </Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>{t('addArea.slider.slider3Desc1')}</Typography>
                </Box>
            </Slide>
        </Carousel>
    );
};

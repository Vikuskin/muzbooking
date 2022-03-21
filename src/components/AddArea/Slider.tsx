import React from 'react';
import { Typography, styled, Box, Button } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import logo1 from 'image/AddAreaPage/sliderLogo.png';
import logo2 from 'image/AddAreaPage/sliderLogo2.png';
import logo3 from 'image/AddAreaPage/sliderLogo3.png';
import arrowLeft from 'image/AddAreaPage/sliderArrowLeft.webp';
import arrowRight from 'image/AddAreaPage/sliderArrowRight.webp';

const Slide = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    '@media (max-width: 899px)': {
        flexWrap: 'wrap',
    },
});

export const Slider: React.FC = () => {
    const myArrow = (
        type: string,
        onClick: React.MouseEventHandler | undefined
    ) => {
        const pointer =
            type === 'PREV' ? (
                <img
                    style={{ width: '40px', height: 'auto' }}
                    src={arrowLeft}
                    alt="Arrow left"
                />
            ) : (
                <img
                    style={{ width: '40px', height: 'auto' }}
                    src={arrowRight}
                    alt="Arrow right"
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
                    <img src={logo1} alt="Logo" />
                </Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>
                        В самом начале своей работы мы пользовались онлайн
                        таблицами и календарями, затем самописной CRM системой,
                        так как ни одна из существовавших на рынке CRM систем не
                        закрывала задачи и потребности репетиционной базы.
                    </Typography>
                    <Typography>
                        Ребята из MUSbooking помогли с настройкой CRM, провели
                        обучение для администраторов и оказали всю возможную
                        поддержку. Переход на новую CRM прошёл очень быстро и
                        безболезненно.
                    </Typography>
                </Box>
            </Slide>

            <Slide>
                <Typography sx={{ maxWidth: '200px' }}>
                    <img src={logo2} alt="Logo" />
                </Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>
                        MUSbooking - лучший сервис по бронированию для
                        творческих площадок в России.
                    </Typography>
                    <Typography>
                        Работаем с ними с самого запуска приложения и уже 3-й
                        год наблюдаем постоянное и качественное развитие как
                        внешней оболочки, так и внутренних возможностей для
                        партнера и клиента.
                    </Typography>
                    <Typography>
                        От души желаем процветания и реализации новых идей!
                    </Typography>
                </Box>
            </Slide>

            <Slide>
                <Typography sx={{ maxWidth: '200px' }}>
                    <img src={logo3} alt="Logo" />
                </Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>
                        Достаточно удобный и выгодный сервис для привлечения
                        новых клиентов для нашей компании. Сервис сработал
                        намного лучше, чем я изначально ожидал.
                    </Typography>
                </Box>
            </Slide>
        </Carousel>
    );
};

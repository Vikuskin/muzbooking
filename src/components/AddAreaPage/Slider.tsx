import logo1 from '../../image/AddAreaPage/sliderLogo.png';
import logo2 from '../../image/AddAreaPage/sliderLogo2.png';
import logo3 from '../../image/AddAreaPage/sliderLogo3.png';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Carousel from 'react-elastic-carousel';
import arrowLeft from '../../image/AddAreaPage/sliderArrowLeft.webp'
import arrowRight from '../../image/AddAreaPage/sliderArrowRight.webp'
import { Button } from '@material-ui/core';
import { styled } from '@mui/material';
 
const Slide = styled('div')({
    display: 'flex',
    aligntems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    mb: 5,
    '@media (max-width: 900px)': {
        flexWrap: 'wrap'
    }
});

export const Slider = () => {
    const myArrow = (type: any, onClick: any) => {
        const pointer = type === 'PREV' ? <Button><img style={{ width: '40px' }} src={arrowLeft}/></Button> : <Button><img style={{ width: '40px' }} src={arrowRight}/></Button>
        return (
          <Button onClick={onClick}>
            {pointer}
          </Button>
        )
    }
    return (
        <Carousel pagination={false} itemsToShow={1} isRTL={false} renderArrow={({ type, onClick }) => myArrow(type, onClick)}>
            <Slide>
                <Typography sx={{ maxWidth: '200px' }}><img src={logo1}/></Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>MUSbooking - лучший сервис по бронированию для творческих площадок в России.</Typography>
                    <Typography>Работаем с ними с самого запуска приложения и уже 3-й год наблюдаем постоянное и качественное развитие как внешней оболочки, так и внутренних возможностей для партнера и клиента.</Typography> 
                    <Typography>От души желаем процветания и реализации новых идей!</Typography>
                </Box>
            </Slide>

            <Slide>
                <Typography sx={{ maxWidth: '200px' }}><img src={logo2}/></Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>MUSbooking - лучший сервис по бронированию для творческих площадок в России.</Typography>
                    <Typography>Работаем с ними с самого запуска приложения и уже 3-й год наблюдаем постоянное и качественное развитие как внешней оболочки, так и внутренних возможностей для партнера и клиента.</Typography> 
                    <Typography>От души желаем процветания и реализации новых идей!</Typography>
                </Box>
            </Slide>

            <Slide>
                <Typography sx={{ maxWidth: '200px' }}><img src={logo3}/></Typography>
                <Box sx={{ maxWidth: '700px' }}>
                    <Typography>MUSbooking - лучший сервис по бронированию для творческих площадок в России.</Typography>
                    <Typography>Работаем с ними с самого запуска приложения и уже 3-й год наблюдаем постоянное и качественное развитие как внешней оболочки, так и внутренних возможностей для партнера и клиента.</Typography> 
                    <Typography>От души желаем процветания и реализации новых идей!</Typography>
                </Box>
            </Slide>
        </Carousel>
        
    )
}
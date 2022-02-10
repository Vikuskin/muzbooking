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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: '50px',
    '@media (max-width: 900px)': {
        flexWrap: 'wrap'
    }
});

export const Slider: React.FC = () => {
    const myArrow = (type: string, onClick: any) => {
        const pointer = type === 'PREV' ? <img style={{ width: '40px' }} src={arrowLeft}/> : <img style={{ width: '40px' }} src={arrowRight}/>
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
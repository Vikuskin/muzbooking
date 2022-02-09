import { Box } from "@mui/system"
import services from './dbServices'
import { Cards } from './Card'
import assistant1 from '../../image/MainPage/assistant.png'
import assistant2 from '../../image/MainPage/assistant2.png'
import assistant3 from '../../image/MainPage/assistant3.jpg'
import assistant4 from '../../image/MainPage/assistant4.png'
import { Container, Typography } from "@mui/material"
import phoneLeft from '../../image/MainPage/mainPhone.png'
import phoneRight from '../../image/MainPage/mainPhone2.png'

export const Main: React.FC = () => {
    return (
        <>
        <Container maxWidth="xl" sx={{ pt: '50px' }}>
            <Typography component='h1' sx={{ 
                textAlign: 'center', 
                fontSize: { xs: '15px', sm: '20px', md: '25px' }, 
                ml: { xs: 5, sm: 10, md: 25, lg: 30 }, 
                mr: { xs: 5, sm: 10, md: 25, lg: 30 }, 
                mt: { xs: 5, sm: 10, md: 15 }, 
                mb: { xs: 2, sm: 4 } 
            }}>
                <h1>Поиск и бронирование творческих площадок и услуг</h1>
            </Typography>
            <Box sx={{ mb: 5, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
               {services.map((service, i) => 
                        <Cards
                        key={i}
                        title={service.title} 
                        img={service.img} 
                        description={service.description} 
                        icon={service.icon}/>
                )} 
            </Box>
            
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                ml: 3, 
                mr: 3,
                flexWrap: 'nowrap'
            }}>
                <Typography><img src={phoneLeft} alt='Phone'/></Typography>
                <Box sx={{ 
                    fontWeight: 'bold', 
                    fontSize: '20px',
                    display: { xs: 'none', m: 'none', md: 'none', lg: 'block' }
                }}>
                    <p style={{ padding: '10px' }}>Более 1500 вариантов площадок и услуг в различных сферах творческой деятельности;</p>
                    <p style={{ padding: '10px' }}>Автоматизированый процесс бронирования и отмены. Никаких звонков и подтверждений;</p>
                    <p style={{ padding: '10px' }}>Удобный поиск с использованием многочисленных параметров;</p>
                    <p style={{ padding: '10px' }}>Накопительная система скидок и бонусов.</p>
                </Box>
                <Typography><img src={phoneRight} alt='Phone'/></Typography>
            </Box>
            <Box sx={{ 
                    fontWeight: 'bold', 
                    fontSize: { xs: '15px', md: '20px'},
                    display: { md: 'block', lg: 'none' }
                }}>
                    <p style={{ padding: '5px' }}>Более 1500 вариантов площадок и услуг в различных сферах творческой деятельности;</p>
                    <p style={{ padding: '5px' }}>Автоматизированый процесс бронирования и отмены. Никаких звонков и подтверждений;</p>
                    <p style={{ padding: '5px' }}>Удобный поиск с использованием многочисленных параметров;</p>
                    <p style={{ padding: '5px' }}>Накопительная система скидок и бонусов.</p>
            </Box>

            <Typography component='h1' sx={{ 
                textAlign: 'center', 
                fontSize: { xs: '15px', sm: '20px', md: '25px' }, 
                ml: { xs: 5, sm: 10, md: 25, lg: 30 }, 
                mr: { xs: 5, sm: 10, md: 25, lg: 30 }, 
                mt: { xs: 5, sm: 5, md: 10 }, 
                mb: { xs: 2, sm: 4 } 
            }}>
                <h1>Незаменимый помощник</h1>
            </Typography>
        </Container>
        <Box sx={{ display: 'flex', m: 0, p: 0, width: '100%', mb: '80px' }}>
            <img src={assistant1} style={{ width: '25%' }} alt='Helper'/>
            <img src={assistant2} style={{ width: '25%' }} alt='Helper'/>
            <img src={assistant3} style={{ width: '25%' }} alt='Helper'/>
            <img src={assistant4} style={{ width: '25%' }} alt='Helper'/>
        </Box>
        </>
    )
}
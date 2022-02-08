import { Box } from "@mui/system"
import services from './services'
import { Cards } from './Card'
import assistant1 from '../../image/assistant.png'
import assistant2 from '../../image/assistant2.png'
import assistant3 from '../../image/assistant3.jpg'
import assistant4 from '../../image/assistant4.png'
import { Container } from "@mui/material"
import phoneLeft from '../../image/mainPhone.png'
import phoneRight from '../../image/mainPhone2.png'

export const Main: React.FC = () => {
    return (
        <>
        <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', fontSize: { xs: '15px', sm: '20px', md: '25px' }, ml: { xs: 5, sm: 10, md: 25, lg: 30 }, mr: { xs: 5, sm: 10, md: 25, lg: 30 }, mt: { xs: 5, sm: 10, md: 15 }, mb: 5 }}>
                <h1>Поиск и бронирование творческих площадок и услуг</h1>
            </Box>
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
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: 3, mr: 3 }}>
                <img src={phoneLeft} alt='Phone'/>
                <Box sx={{ fontWeight: 'bold', fontSize: '25px' }}>
                    <p style={{ padding: '10px' }}>Более 1500 вариантов площадок и услуг в различных сферах творческой деятельности;</p>
                    <p style={{ padding: '10px' }}>Автоматизированый процесс бронирования и отмены. Никаких звонков и подтверждений;</p>
                    <p style={{ padding: '10px' }}>Удобный поиск с использованием многочисленных параметров;</p>
                    <p style={{ padding: '10px' }}>Накопительная система скидок и бонусов.</p>
                </Box>
                <img src={phoneRight} alt='Phone'/>
            </Box>

            <Box sx={{ textAlign: 'center', fontSize: { xs: '15px', sm: '20px', md: '25px' }, ml: { xs: 5, sm: 10, md: 25, lg: 30 }, mr: { xs: 5, sm: 10, md: 25, lg: 30 }, mt: { xs: 5, sm: 10, md: 15 }, mb: 5 }}>
                <h1>Незаменимый помощник</h1>
            </Box>
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
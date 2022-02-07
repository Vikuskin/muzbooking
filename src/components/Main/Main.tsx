import { Box } from "@mui/system"
import services from './services'
import { Cards } from './Card'
import assistant1 from '../../image/assistant.png'
import assistant2 from '../../image/assistant2.png'
import assistant3 from '../../image/assistant3.jpg'
import assistant4 from '../../image/assistant4.png'

export const Main: React.FC = () => {
    return (
        <section>
            <Box sx={{ textAlign: 'center', fontSize: { xs: '15px', sm: '20px', md: '30px' }, ml: { xs: 5, sm: 10, md: 25, lg: 30 }, mr: { xs: 5, sm: 10, md: 25, lg: 30 }, mt: { xs: 5, sm: 10, md: 15 }, mb: 5 }}>
                <h1>Поиск и бронирование творческих площадок и услуг</h1>
            </Box>
            <Box sx={{ mr: 5, ml: 5, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
               {services.map((service, i) => 
                        <Cards
                        key={i}
                        title={service.title} 
                        img={service.img} 
                        description={service.description} 
                        icon={service.icon}/>
                )} 
            </Box>
            <Box sx={{ textAlign: 'center', fontSize: { xs: '15px', sm: '20px', md: '30px' }, ml: { xs: 5, sm: 10, md: 25, lg: 30 }, mr: { xs: 5, sm: 10, md: 25, lg: 30 }, mt: { xs: 5, sm: 10, md: 15 }, mb: 5 }}>
                <h1>Незаменимый помощник</h1>
            </Box>
            <Box sx={{ display: 'flex', m: 0, p: 0, width: '100%', mb: '80px' }}>
                <img src={assistant1} style={{ width: '25%' }} alt='Helper'/>
                <img src={assistant2} style={{ width: '25%' }} alt='Helper'/>
                <img src={assistant3} style={{ width: '25%' }} alt='Helper'/>
                <img src={assistant4} style={{ width: '25%' }} alt='Helper'/>
            </Box>
        </section>
    )
}
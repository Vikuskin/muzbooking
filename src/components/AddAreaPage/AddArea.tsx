import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import bgMain from '../../image/AddAreaPage/bgMain.png';
import benefitsItem1 from '../../image/AddAreaPage/benefits1.png.webp'
import benefitsItem2 from '../../image/AddAreaPage/benefits2.png.webp'
import benefitsItem3 from '../../image/AddAreaPage/benefits3.png.webp'
import benefitsMid1 from '../../image/AddAreaPage/benefitsMid1.png.webp';
import benefitsMid2 from '../../image/AddAreaPage/benefitsMid2.png.webp';
import benefitsMid3 from '../../image/AddAreaPage/benefitsMid3.png';
import { dbCardBenefits } from './dbCardBenefits'
import { CardBenefits } from './CardBenefits';
import partners from '../../image/AddAreaPage/partners.png';
import { Slider } from './Slider';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from "../Footer/Footer";
import { TitleH1 } from "../../style/otherStyles";
import { CustomButton } from "../../style/otherStyles";


export const AddAreaPage: React.FC = () => {
    return (
        <>
        <Header/>
        <Box sx={{
            backgroundImage: `url(${bgMain})`,
            height: {xs: '600px', sm: '800px'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            pt: '150px'
        }}>
            <Typography component='h1' sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: 26, sm: 30, md: 35, lg: 45 },
                lineHeight: 1,
                color: 'white',
                maxWidth: '1300px',
                textAlign: { xs: 'center', md: 'left'},
                p: { xs: '10px 30px', md: '0 50px', lg: '0 110px' },
            }}>
                Станьте частью единственной экосистемы творческих площадок и услуг в России
            </Typography>
            <Box sx={{
                color: 'black',
                backgroundColor: '#ccc',
                maxWidth: {sm: '100%', md: '800px'},
                p: { xs: '0 30px', md: '0 50px', lg: '0 110px' },
                textAlign: { xs: 'center', md: 'left'},
                fontSize: { xs: '1rem', sm: 22, md: 25 },
                lineHeight: '1'
            }}>
                <ul style={{ listStyle: 'inside' }}>
                    <li>
                        Первые бронирования в день публикации 
                        <Typography sx={{ fontSize: { xs: '0.8rem', sm: 18, md: 22 }, padding: '0 0 10px 20px', lineHeight: '1' }}>*наш рекорд — 4 минуты с момента публикации в сервисе</Typography>
                    </li>
                    <li>
                        Комиссия только за оплаченные услуги 
                        <Typography sx={{ fontSize: { xs: '0.8rem', sm: 18, md: 22 }, padding: '0 0 10px 20px', lineHeight: '1' }}>*все остальные продукты сервиса — бесплатно</Typography>
                    </li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row'},
                justifyContent: { sm: 'center', md: 'center', lg: 'right' },
                alignItems: 'bottom',
                pr: { md: 0, lg: '110px' },
                margin: { xs: 'auto', sm: '5px', md: '5px', lg: '10px', xl: '15px' },
                lineHeight: '1'
            }}>
                <Link to='/registration'>
                    <CustomButton sx={{ 
                        margin: { xs: '2px auto', sm: '2px', md: '5px', lg: '10px', xl: '15px' },
                        lineHeight: '1',
                        minWidth: '140px'
                    }}>Регистрация</CustomButton> 
                </Link>
                <Link to='/'>
                    <CustomButton sx={{ 
                        margin: { xs: '2px auto', sm: '2px', md: '5px', lg: '10px', xl: '15px' },
                        lineHeight: '1',
                        minWidth: '140px'
                    }}>Тарифы</CustomButton>
                </Link>
                <Link to='/login'>
                    <CustomButton sx={{ 
                        margin: { xs: '2px auto', sm: '2px', md: '5px', lg: '10px', xl: '15px' }, 
                        lineHeight: '1',
                        minWidth: '140px'
                    }}>Вход в кабинет</CustomButton>
                </Link>
            </Box>
        </Box>

        {/* //benefits */}
        <Box sx={{ ml: '30px', mr: '30px', mb: '20px' }}>
        <TitleH1 sx={{ mb: '0!important' }}>MUSbooking — это не очередная CRM система или система онлайн бронирования.</TitleH1>
            <Typography sx={{ 
                fontWeight: 'normal', 
                fontSize: { xs: '15px', sm: '20px', md: '25px' }, 
            }}>Это сервис, который приведет нового клиента напрямую в ваше расписание по самой низкой цене.</Typography>
        </Box>    
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            mb: { xs: 2, sm: 4 },
            flexWrap: { xs: 'wrap',sm: 'wrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' }
        }}>
            <Box>
                <Typography sx={{ height: { md: '250px', lg: '300px' } }}><img src={benefitsItem1} alt=''/></Typography>
                <Typography sx={{ fontSize: { xs: '15px', sm: '20px', md: '25px' } }}>Ваша целевая аудитория</Typography>
            </Box>
            <Box>
                <Typography sx={{ height: { md: '250px', lg: '300px' } }}><img src={benefitsItem2} alt=''/></Typography>
                <Typography sx={{ fontSize: { xs: '15px', sm: '20px', md: '25px' } }}>Экосистема продуктов MUSbooking</Typography>
            </Box>
            <Box>
                <Typography sx={{ height: { md: '250px', lg: '300px' } }}><img src={benefitsItem3} alt=''/></Typography>
                <Typography sx={{ fontSize: { xs: '15px', sm: '20px', md: '25px' } }}>Пустой слот в вашем расписании</Typography>
            </Box>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 60px',
            background: 'rgba(255, 127, 0, 0.26)',
            flexWrap: { xs: 'wrap',sm: 'wrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' },
            fontSize: { xs: '0.9rem', sm: '20px', md: '25px' }, 
            marginBottom: '50px'
        }}>
            <Box sx={{ m: '10px 15px' }}>
                <p style={{ fontWeight: 'bold' }}>2 200</p>
                <p>пользователей ищут площадки каждый день</p>
            </Box>
            <Box sx={{ m: '10px 15px' }}>
                <p style={{ fontWeight: 'bold' }}>15 000</p>
                <p>уникальных пользователей ежемесячно</p>
            </Box>
            <Box sx={{ m: '10px 15px' }}>
                <p style={{ fontWeight: 'bold' }}>75 000</p>
                <p>бронирований совершается ежемесячно</p>
            </Box>
            <Box sx={{ m: '10px 15px' }}>
                <p style={{ fontWeight: 'bold' }}>230 млн.</p>
                <p>рублей заработали наши партнеры</p>
            </Box>
        </Box>

        {/* benefits MIDDLE */}
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: { xs: 'wrap',sm: 'wrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' },
        }}>
            <Typography sx={{ maxWidth: '600px' }}><img src={benefitsMid1} alt=''/></Typography>
            <Box sx={{
                textAlign: 'center',
                pr: 5,
                maxWidth: '600px',
                pl: 5,
                margin: 'auto'
            }}>
                <Typography sx={{ marginBottom: { xs: '10px', sm: '20px'},fontWeight: 'bold', fontSize: { xs: '1rem', sm: '20px', md: '25px' } }}>Самая широкая линейка продуктов на рынке.</Typography>
                <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>Ваши площадки и услуги будут доступны для бронирования во всех наших продуктах. Каталог, мобильное приложение и виджет для бронирования позволят продавать доступное время и услуги максимально широкой аудитории.</Typography>
            </Box>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center',sm: 'right', md: 'space-between', lg: 'space-between', xl: 'space-between' },
            alignItems: 'center',
            flexWrap: { xs: 'wrap-reverse',sm: 'wrap-reverse', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' },
        }}>
            <Box sx={{
                textAlign: 'center',
                pr: 5,
                pl: 5,
                minWidth: '220px',
                maxWidth: '620px',
                margin: 'auto'
            }}>
                <Typography sx={{ marginBottom: { xs: '10px', sm: '20px'}, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '20px', md: '25px' } }}>Личный кабинет с любого устройства.</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>анализ бронирований и заказанных услуг;</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>редактирование информации о площадках и услугах;</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>гибкие отношения с клиентом, система штрафов, скидок и условий оплаты;</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>работа с отзывами пользователей.</Typography>
            </Box>
            <Typography sx={{ maxWidth: '600px' }}><img src={benefitsMid2} alt=''/></Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: { xs: 'wrap',sm: 'wrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' },
            pr: 5,
            pl: 5,
            textAlign: 'center'
        }}>
            <Typography sx={{ maxWidth: '600px' }}><img style={{ maxHeight: '350px' }} src={benefitsMid3} alt=''/></Typography>
            <Box sx={{ maxWidth: '600px' }}>
                <Typography sx={{ marginBottom: { xs: '10px', sm: '20px'}, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '20px', md: '25px' } }}>Простая интеграция и персональная поддержка.</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>полная синхронизация с вашей crm/erp платформой;</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>мгновенная синхронизация с Google/Outlook календарями;</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>email и смс уведомления;</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>персональная поддержка и бесплатные консультации при публикации;</Typography>
                    <Typography sx={{ fontSize: { xs: '15px', sm: 15, md: 20 } }}>прием онлайн платежей напрямую на ваш расчетный счет.</Typography>
            </Box>
        </Box>
        
        {/* benefits cards */}
        <TitleH1>Уникальные преимущества MUSbooking</TitleH1>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            ml: { xs: 2, sm: 5, md: 8, lg: 20 }, 
            mr: { xs: 2, sm: 5, md: 8, lg: 20 }, 
        }}>
            {dbCardBenefits.map((card, i) => 
                <CardBenefits
                    key={i}
                    img={card.img}
                    description={card.description}
                />    
            )}
        </Box>

        {/* partners */}
        <TitleH1>С нами работают более 500 компаний</TitleH1>
        <img src={partners} style={{ width: '100%' }} alt='Partners'/>
        

        {/* slider */}
        <TitleH1>Отзывы наших партнеров</TitleH1>
        <Slider/>
        <Footer/>
        </>
    )
}
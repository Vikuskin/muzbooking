import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import bgMain from 'image/AddAreaPage/bgMain.png';
import benefitsItem1 from 'image/AddAreaPage/benefits1.png.webp';
import benefitsItem2 from 'image/AddAreaPage/benefits2.png.webp';
import benefitsItem3 from 'image/AddAreaPage/benefits3.png.webp';
import benefitsMid1 from 'image/AddAreaPage/benefitsMid1.png.webp';
import benefitsMid2 from 'image/AddAreaPage/benefitsMid2.png.webp';
import benefitsMid3 from 'image/AddAreaPage/benefitsMid3.png';
import partners from 'image/AddAreaPage/partners.png';
import {
    dbCardBenefits,
    CardBeneftsInterface,
} from 'components/databases/dbCardBenefits';
import { Slider } from 'components/AddAreaPage/Slider';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { CardBenefits } from 'components/AddAreaPage/CardBenefits';
import { TitleH1, TitleH2, CustomButton, FlexDiv } from 'style/otherStyles';

const List = styled('ul')({
    color: 'black',
    backgroundColor: '#ccc',
    maxWidth: '800px',
    padding: '0 110px',
    textAlign: 'left',
    fontSize: '25px',
    lineHeight: '1',
    listStyle: 'inside',
    '@media (max-width: 899px)': {
        padding: '0 50px',
        fontSize: '22px',
        maxWidth: '100%',
        textAlign: 'center',
    },
    '@media (max-width: 599px)': {
        padding: '0 30px',
        fontSize: '1rem',
    },
});

const ButtonDiv = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'bottom',
    paddingRight: '110px',
    margin: '15px',
    '@media (max-width: 1199px)': {
        paddingRight: '0',
    },
    '@media (max-width: 899px)': {
        justifyContent: 'center',
        margin: '5px',
    },
    '@media (max-width: 599px)': {
        flexDirection: 'column',
        margin: 'auto',
    },
});

const MainContent = styled('div')({
    backgroundImage: `url(${bgMain})`,
    height: '800px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: '150px',
    '@media (max-width: 599px)': {
        height: '640px',
    },
});

const TitleH1MainContent = styled(TitleH1)({
    color: 'white',
    maxWidth: '1300px',
    textAlign: 'left',
    padding: '0 110px',
    margin: 0,
    fontSize: '35px',
    '@media (max-width: 1199px)': {
        fontSize: '35px',
    },
    '@media (max-width: 899px)': {
        textAlign: 'center',
        padding: '0 50px',
    },
    '@media (max-width: 599px)': {
        padding: 0,
        fontSize: '25px',
        marginTop: 0,
    },
});

const ButtonMainContent = styled(CustomButton)({
    margin: '15px',
    minWidth: '140px',
    '@media (max-width: 899px)': {
        margin: '5px',
        minWidth: '140px',
    },
});

const BenefitsStrip = styled(FlexDiv)({
    padding: '40px',
    background: 'rgba(255, 127, 0, 0.26)',
    flexWrap: 'nowrap',
    margin: 'auto',
    marginBottom: '50px',
    '@media (max-width: 599px)': {
        flexWrap: 'wrap',
    },
});

const WrapDiv = styled(FlexDiv)({
    flexWrap: 'nowrap',
    '@media (max-width: 599px)': {
        flexWrap: 'wrap',
    },
});

const TitleH1BenefitsMid = styled(TitleH1)({
    margin: '0 0 20px 0',
    '@media (max-width: 899px)': {
        fontSize: '20px',
    },
    '@media (max-width: 599px)': {
        fontSize: '18px',
    },
});

const BenefitsMid1 = styled(Box)({
    paddingRight: '40px',
    paddingLeft: '40px',
    minWidth: '220px',
    maxWidth: '620px',
    margin: 'auto',
    marginBottom: '20px',
    marginTop: 0,
});
export const AddAreaPage: React.FC = () => (
    <>
        <Header />
        <MainContent>
            <TitleH1MainContent>
                Станьте частью единственной экосистемы творческих площадок и
                услуг в России
            </TitleH1MainContent>
            <List>
                <li>
                    Первые бронирования в день публикации
                    <TitleH2 sx={{ padding: '0 0 10px 20px' }}>
                        *наш рекорд — 4 минуты с момента публикации в сервисе
                    </TitleH2>
                </li>
                <li>
                    Комиссия только за оплаченные услуги
                    <TitleH2 sx={{ padding: '0 0 10px 20px' }}>
                        *все остальные продукты сервиса — бесплатно
                    </TitleH2>
                </li>
            </List>

            <ButtonDiv>
                <Link to="/registration">
                    <ButtonMainContent>Регистрация</ButtonMainContent>
                </Link>
                <Link to="/">
                    <ButtonMainContent>Тарифы</ButtonMainContent>
                </Link>
                <Link to="/login">
                    <ButtonMainContent>Вход в кабинет</ButtonMainContent>
                </Link>
            </ButtonDiv>
        </MainContent>

        {/* //benefits */}
        <Box sx={{ m: '0 30px 20px 30px' }}>
            <TitleH1 sx={{ mb: '0!important' }}>
                MUSbooking — это не очередная CRM система или система онлайн
                бронирования.
            </TitleH1>
            <TitleH2>
                Это сервис, который приведет нового клиента напрямую в ваше
                расписание по самой низкой цене.
            </TitleH2>
        </Box>
        <WrapDiv
            sx={{
                justifyContent: 'space-evenly',
                m: 4,
            }}
        >
            <Box>
                <img
                    src={benefitsItem1}
                    alt="Benefits"
                    style={{ maxHeight: '200px' }}
                />
                <TitleH2>Ваша целевая аудитория</TitleH2>
            </Box>
            <Box>
                <img
                    src={benefitsItem2}
                    alt="Benefits"
                    style={{ maxHeight: '200px' }}
                />
                <TitleH2>Экосистема продуктов MUSbooking</TitleH2>
            </Box>
            <Box>
                <img
                    src={benefitsItem3}
                    alt="Benefits"
                    style={{ maxHeight: '200px' }}
                />
                <TitleH2>Пустой слот в вашем расписании</TitleH2>
            </Box>
        </WrapDiv>
        <BenefitsStrip>
            <TitleH2>
                <p style={{ fontWeight: 'bold' }}>2 200</p>
                <p>пользователей ищут площадки каждый день</p>
            </TitleH2>
            <TitleH2>
                <p style={{ fontWeight: 'bold' }}>15 000</p>
                <p>уникальных пользователей ежемесячно</p>
            </TitleH2>
            <TitleH2>
                <p style={{ fontWeight: 'bold' }}>75 000</p>
                <p>бронирований совершается ежемесячно</p>
            </TitleH2>
            <TitleH2>
                <p style={{ fontWeight: 'bold' }}>230 млн.</p>
                <p>рублей заработали наши партнеры</p>
            </TitleH2>
        </BenefitsStrip>

        {/* benefits MIDDLE */}
        <WrapDiv sx={{ pb: 4 }}>
            <Typography sx={{ maxWidth: '600px' }}>
                <img src={benefitsMid1} alt="" />
            </Typography>
            <Box
                sx={{
                    pr: 4,
                    maxWidth: { sm: '320px', md: '600px' },
                    pl: 4,
                    margin: 'auto',
                }}
            >
                <TitleH1BenefitsMid sx={{ margin: '0 0 20px 0 !important' }}>
                    Самая широкая линейка продуктов на рынке.
                </TitleH1BenefitsMid>
                <TitleH2 sx={{ fontSize: '20px' }}>
                    Ваши площадки и услуги будут доступны для бронирования во
                    всех наших продуктах. Каталог, мобильное приложение и виджет
                    для бронирования позволят продавать доступное время и услуги
                    максимально широкой аудитории.
                </TitleH2>
            </Box>
        </WrapDiv>
        <WrapDiv
            sx={{
                justifyContent: {
                    xs: 'center',
                    sm: 'right',
                },
                flexWrap: { xs: 'wrap-reverse', sm: 'nowrap' },
                pb: 4,
            }}
        >
            <BenefitsMid1>
                <TitleH1BenefitsMid sx={{ margin: '0 0 20px 0 !important' }}>
                    Личный кабинет с любого устройства.
                </TitleH1BenefitsMid>
                <TitleH2 sx={{ fontSize: '20px' }}>
                    анализ бронирований и заказанных услуг;
                    <br />
                    редактирование информации о площадках и услугах;
                    <br />
                    гибкие отношения с клиентом, система штрафов, скидок и
                    условий оплаты;
                    <br />
                    работа с отзывами пользователей.
                </TitleH2>
            </BenefitsMid1>
            <Typography sx={{ maxWidth: '600px' }}>
                <img src={benefitsMid2} alt="" />
            </Typography>
        </WrapDiv>
        <WrapDiv
            sx={{
                justifyContent: 'center',
                pr: 4,
                pl: 4,
            }}
        >
            <Typography sx={{ maxWidth: '600px' }}>
                <img style={{ maxHeight: '350px' }} src={benefitsMid3} alt="" />
            </Typography>
            <Box
                sx={{ maxWidth: { sm: '270px', md: '500px' }, margin: 'auto' }}
            >
                <TitleH1BenefitsMid sx={{ margin: '0 0 20px 0 !important' }}>
                    Простая интеграция и персональная поддержка.
                </TitleH1BenefitsMid>
                <TitleH2 sx={{ fontSize: '20px' }}>
                    полная синхронизация с вашей crm/erp платформой;
                    <br />
                    мгновенная синхронизация с Google/Outlook календарями;
                    <br />
                    email и смс уведомления;
                    <br />
                    персональная поддержка и бесплатные консультации при
                    публикации;
                    <br />
                    прием онлайн платежей напрямую на ваш расчетный счет.
                </TitleH2>
            </Box>
        </WrapDiv>

        {/* benefits cards */}
        <TitleH1>Уникальные преимущества MUSbooking</TitleH1>
        <FlexDiv
            sx={{
                flexWrap: 'wrap',
                ml: { xs: 2, sm: 5, md: 8, lg: 20 },
                mr: { xs: 2, sm: 5, md: 8, lg: 20 },
            }}
        >
            {dbCardBenefits.map((card: CardBeneftsInterface) => (
                <CardBenefits
                    key={card.id}
                    img={card.img}
                    description={card.description}
                />
            ))}
        </FlexDiv>

        {/* partners */}
        <TitleH1>С нами работают более 500 компаний</TitleH1>
        <img src={partners} style={{ width: '100%' }} alt="Partners" />

        {/* slider */}
        <TitleH1>Отзывы наших партнеров</TitleH1>
        <Slider />
        <Footer />
    </>
);

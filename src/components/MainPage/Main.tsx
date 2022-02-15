import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import assistant1 from 'image/MainPage/assistant.png';
import assistant2 from 'image/MainPage/assistant2.png';
import assistant3 from 'image/MainPage/assistant3.jpg';
import assistant4 from 'image/MainPage/assistant4.png';
import phoneLeft from 'image/MainPage/mainPhone.png';
import phoneRight from 'image/MainPage/mainPhone2.png';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { TitleH1, FlexDiv } from 'style/otherStyles';
import { Cards } from 'components/MainPage/Card';
import { dbServices, Services } from 'components/databases/dbServices';

export const Main: React.FC = () => (
    <>
        <Header />
        <Container maxWidth="xl" sx={{ pt: '50px' }}>
            <TitleH1>Поиск и бронирование творческих площадок и услуг</TitleH1>
            <FlexDiv sx={{ mb: 5, flexWrap: 'wrap' }}>
                {dbServices.map((service: Services) => (
                    <Cards
                        key={service.id}
                        title={service.title}
                        img={service.img}
                        description={service.description}
                        icon={service.icon}
                        id={service.id}
                    />
                ))}
            </FlexDiv>

            <FlexDiv
                sx={{
                    ml: 3,
                    mr: 3,
                }}
            >
                <Typography>
                    <img src={phoneLeft} alt="Phone" />
                </Typography>
                <Box
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        display: {
                            xs: 'none',
                            lg: 'block',
                        },
                    }}
                >
                    <p style={{ padding: '10px' }}>
                        Более 1500 вариантов площадок и услуг в различных сферах
                        творческой деятельности;
                    </p>
                    <p style={{ padding: '10px' }}>
                        Автоматизированый процесс бронирования и отмены. Никаких
                        звонков и подтверждений;
                    </p>
                    <p style={{ padding: '10px' }}>
                        Удобный поиск с использованием многочисленных
                        параметров;
                    </p>
                    <p style={{ padding: '10px' }}>
                        Накопительная система скидок и бонусов.
                    </p>
                </Box>
                <Typography>
                    <img src={phoneRight} alt="Phone" />
                </Typography>
            </FlexDiv>
            <Box
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '15px', md: '20px' },
                    display: { md: 'block', lg: 'none' },
                }}
            >
                <p style={{ padding: '5px' }}>
                    Более 1500 вариантов площадок и услуг в различных сферах
                    творческой деятельности;
                </p>
                <p style={{ padding: '5px' }}>
                    Автоматизированый процесс бронирования и отмены. Никаких
                    звонков и подтверждений;
                </p>
                <p style={{ padding: '5px' }}>
                    Удобный поиск с использованием многочисленных параметров;
                </p>
                <p style={{ padding: '5px' }}>
                    Накопительная система скидок и бонусов.
                </p>
            </Box>

            <TitleH1>Незаменимый помощник</TitleH1>
        </Container>
        <Box sx={{ display: 'flex', m: 0, p: 0, width: '100%', mb: '80px' }}>
            <img src={assistant1} style={{ width: '25%' }} alt="Helper" />
            <img src={assistant2} style={{ width: '25%' }} alt="Helper" />
            <img src={assistant3} style={{ width: '25%' }} alt="Helper" />
            <img src={assistant4} style={{ width: '25%' }} alt="Helper" />
        </Box>
        <Footer />
    </>
);

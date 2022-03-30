import React from 'react';
import { useTranslation } from 'react-i18next';
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
import { Cards } from 'components/Main/Card';
import { dbServices } from 'components/databases/dbServices';
import { ServicesDB } from 'types/Databases';

export const Main: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <Container maxWidth='xl' sx={{ pt: '50px' }}>
                <TitleH1>{t('main.title1')}</TitleH1>
                <FlexDiv sx={{ mb: 5, flexWrap: 'wrap' }}>
                    {dbServices.map((service: ServicesDB, i: number) => (
                        <Cards
                            key={service.id}
                            title={t(`dbServices.title${i}`)}
                            img={service.img}
                            description={t(`dbServices.card${i}`)}
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
                        <img src={phoneLeft} alt='Phone' />
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
                            {t('main.description1')}
                        </p>
                        <p style={{ padding: '10px' }}>
                            {t('main.description2')}
                        </p>
                        <p style={{ padding: '10px' }}>
                            {t('main.description3')}
                        </p>
                        <p style={{ padding: '10px' }}>
                            {t('main.description4')}
                        </p>
                    </Box>
                    <Typography>
                        <img src={phoneRight} alt='Phone' />
                    </Typography>
                </FlexDiv>
                <Box
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '15px', md: '20px' },
                        display: { md: 'block', lg: 'none' },
                    }}
                >
                    <p style={{ padding: '5px' }}>{t('main.description5')}</p>
                    <p style={{ padding: '5px' }}>{t('main.description6')}</p>
                    <p style={{ padding: '5px' }}>{t('main.description7')}</p>
                    <p style={{ padding: '5px' }}>{t('main.description8')}</p>
                </Box>

                <TitleH1>{t('main.title2')}</TitleH1>
            </Container>
            <Box
                sx={{ display: 'flex', m: 0, p: 0, width: '100%', mb: '80px' }}
            >
                <img src={assistant1} style={{ width: '25%' }} alt='Helper' />
                <img src={assistant2} style={{ width: '25%' }} alt='Helper' />
                <img src={assistant3} style={{ width: '25%' }} alt='Helper' />
                <img src={assistant4} style={{ width: '25%' }} alt='Helper' />
            </Box>
            <Footer />
        </>
    );
};

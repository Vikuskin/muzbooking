/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container, Typography, styled, Button } from '@mui/material';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FlexDiv, TitleH1, TitleH2 } from 'style/otherStyles';
import addressIcon from 'image/SearchPage/address.svg';
import subwayIcon from 'image/SearchPage/subway.svg';
import timetableIcon from 'image/SearchPage/timetable.svg';
import { Box } from '@mui/system';
import Carousel from 'react-elastic-carousel';
import { CatalogPlatformCard } from 'components/SearchPage/CatalogPlatformCard';
import Fancybox from 'components/Fancybox/Fancybox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



const Title = styled(TitleH1)({
    textAlign: 'left',
    marginBottom: '20px',
    marginTop: '20px',
});

export const Catalog: React.FC = () => {
    const { data, loading } = useTypedSelector((state) => state.data);
    console.log(data);

    return (
        <>
            <Header />
            {loading ? (
                <>Загрузка...</>
            ) : (
                <>
                    <Container
                        maxWidth="xl"
                        sx={{ pt: '100px', textAlign: 'left' }}
                    >
                        <Title>{data.place.nameCompany}</Title>
                        <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                            <FlexDiv sx={{ mr: '15px' }}>
                                <img src={addressIcon} alt="Address icon" />
                                <Typography sx={{ ml: '5px' }}>
                                    {data.place.address}
                                </Typography>
                            </FlexDiv>
                            <FlexDiv sx={{ mr: '15px' }}>
                                <img src={subwayIcon} alt="Subway icon" />
                                <Typography sx={{ ml: '5px' }}>
                                    {data.place.subway}
                                </Typography>
                            </FlexDiv>
                            <FlexDiv>
                                <img src={timetableIcon} alt="Timetable icon" />
                                <Typography sx={{ ml: '5px' }}>
                                    {data.place.timetable}
                                </Typography>
                            </FlexDiv>
                            <FlexDiv>
                                <LocalPhoneIcon/>
                                <Typography sx={{ ml: '5px' }}>
                                    {data.place.phone[0]}
                                </Typography>
                            </FlexDiv>
                        </Box>
                    </Container>

                    {/* SLIDER */}
                    <Box style={{ maxWidth: '1600px', margin: 'auto' }}>
                        <Carousel
                            pagination={false}
                            itemsToShow={1}
                            isRTL={false}
                        >
                            {data.platforms.map((item: any) =>
                                item.images.map((img: any) => (
                                    <Fancybox options={{ infinite: false }}>
                                        <Button
                                            data-fancybox="gallery"
                                            data-src={`http://localhost:5000/${img.destination}/${img.filename}`}
                                        >
                                            <img
                                                src={`http://localhost:5000/${img.destination}/${img.filename}`}
                                                alt="Images of platform"
                                            />
                                        </Button>
                                    </Fancybox>
                                ))
                            )}
                        </Carousel>
                    </Box>

                    <Container maxWidth="xl" sx={{ textAlign: 'left' }}>
                        <Title>Площадки объекта</Title>
                        {data.platforms.map((platform: any) => (
                            <CatalogPlatformCard
                                key={platform._id}
                                namePlatform={platform.namePlatform}
                                square={platform.square}
                                rider={platform.rider}
                                comfort={platform.comfort}
                                services={platform.services}
                                images={platform.images}
                            />
                        ))}

                        <Title>Описание</Title>
                        <Typography sx={{ mb: '30px' }}>
                            {data.place.description}
                        </Typography>
                    </Container>
                </>
            )}
            <Footer />
        </>
    );
};

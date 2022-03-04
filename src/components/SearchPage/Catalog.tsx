/* eslint-disable react/no-children-prop */
import React from 'react';
import { Container, styled, Button, Box } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Carousel from 'react-elastic-carousel';
import ReactMarkdown from 'react-markdown';
import { FlexDiv, TitleH1 } from 'style/otherStyles';
import Fancybox from 'components/Fancybox/Fancybox';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { CatalogPlatformCard } from 'components/SearchPage/CatalogPlatformCard';
import { useTypedSelector } from 'hooks/useTypedSelector';
import addressIcon from 'image/SearchPage/address.svg';
import subwayIcon from 'image/SearchPage/subway.svg';
import timetableIcon from 'image/SearchPage/timetable.svg';
import noImage from 'image/noImage.png';

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
                    <Container maxWidth="xl" sx={{ pt: '100px' }}>
                        <Title>{data.place.nameCompany}</Title>
                        <Box sx={{ display: 'flex', mb: '20px' }}>
                            <FlexDiv sx={{ mr: '15px', fontSize: '16px' }}>
                                <img
                                    src={addressIcon}
                                    alt="Address icon"
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.address}
                            </FlexDiv>
                            <FlexDiv sx={{ mr: '15px', fontSize: '16px' }}>
                                <img
                                    src={subwayIcon}
                                    alt="Subway icon"
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.subway}
                            </FlexDiv>
                            <FlexDiv sx={{ mr: '15px', fontSize: '16px' }}>
                                <img
                                    src={timetableIcon}
                                    alt="Timetable icon"
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.timetable}
                            </FlexDiv>
                            <FlexDiv sx={{ mr: '15px', fontSize: '16px' }}>
                                <LocalPhoneIcon
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.phone[0]}
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
                                item.images[0] ? (
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
                                ) : (
                                    <img
                                        src={noImage}
                                        alt="No platform's images"
                                    />
                                )
                            )}
                        </Carousel>
                    </Box>

                    <Container maxWidth="xl" sx={{ textAlign: 'left' }}>
                        <Title>Площадки объекта</Title>
                        {data.platforms.map((platform: any) => (
                            <CatalogPlatformCard
                                key={platform._id}
                                idPlace={data.place._id}
                                nameCompany={data.place.nameCompany}
                                idPlatform={platform._id}
                                namePlatform={platform.namePlatform}
                                square={platform.square}
                                rider={platform.rider}
                                comfort={platform.comfort}
                                services={platform.services}
                                images={platform.images}
                                products={platform.products}
                            />
                        ))}

                        <Title>Описание</Title>
                        <Box sx={{ mb: '30px', fontSize: '18px' }}>
                            <ReactMarkdown children={data.place.description} />
                        </Box>
                    </Container>
                </>
            )}
            <Footer />
        </>
    );
};

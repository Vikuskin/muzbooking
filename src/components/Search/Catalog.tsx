/* eslint-disable react/no-children-prop */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled, Button, Box } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Carousel from 'react-elastic-carousel';
import ReactMarkdown from 'react-markdown';
import { FlexDiv, TitleH1 } from 'style/otherStyles';
import Fancybox from 'components/Fancybox/Fancybox';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { CatalogPlatformCard } from 'components/Search/CatalogPlatformCard';
import { useTypedSelector } from 'hooks/useTypedSelector';
import addressIcon from 'image/SearchPage/address.svg';
import subwayIcon from 'image/SearchPage/subway.svg';
import timetableIcon from 'image/SearchPage/timetable.svg';
import noImage from 'image/noImage.png';
import { ContentCompanyImages, ContentPagePlatformProps } from 'types/Cabinet';
import { path } from 'enum';

const BoxMainInfo = styled(Box)({
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'left',
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
    },
});

const MainInfoDesc = styled(FlexDiv)({
    marginRight: '5px',
    fontSize: '16px',
    textAlign: 'left',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
        marginRight: '0',
        fontSize: '14px',
        marginBottom: '5px',
    },
});

const Title = styled(TitleH1)({
    textAlign: 'left',
    margin: '0',
    '@media (max-width: 600px)': {
        textAlign: 'center',
    },
});

export const Catalog: React.FC = () => {
    const { data, loading } = useTypedSelector((state) => state.data);
    const { t } = useTranslation();

    return (
        <>
            <Header />
            {loading ? (
                <>{t('loading')}</>
            ) : (
                <Box sx={{ maxWidth: '1600px', margin: 'auto' }}>
                    <Box sx={{ m: '100px 70px 0 70px' }}>
                        <Title>{data.place.nameCompany}</Title>
                        <BoxMainInfo>
                            <MainInfoDesc>
                                <img
                                    src={addressIcon}
                                    alt='Address icon'
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.address}
                            </MainInfoDesc>
                            <MainInfoDesc>
                                <img
                                    src={subwayIcon}
                                    alt='Subway icon'
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.subway}
                            </MainInfoDesc>
                            <MainInfoDesc>
                                <img
                                    src={timetableIcon}
                                    alt='Timetable icon'
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.timetable}
                            </MainInfoDesc>
                            <MainInfoDesc>
                                <LocalPhoneIcon
                                    style={{ marginRight: '5px' }}
                                />
                                {data.place.phone[0]}
                            </MainInfoDesc>
                        </BoxMainInfo>
                    </Box>

                    {/* SLIDER */}
                    <Box style={{ maxWidth: '1600px', margin: 'auto' }}>
                        <Carousel
                            pagination={false}
                            itemsToShow={1}
                            isRTL={false}
                        >
                            {data.platforms.map(
                                (item: ContentPagePlatformProps) =>
                                    item.images[0] ? (
                                        item.images.map(
                                            (img: ContentCompanyImages) => (
                                                <Fancybox
                                                    options={{
                                                        infinite: false,
                                                    }}
                                                >
                                                    <Button
                                                        data-fancybox='gallery'
                                                        data-src={`${path.SERVER_URL}/${img.destination}/${img.filename}`}
                                                    >
                                                        <img
                                                            src={`${path.SERVER_URL}/${img.destination}/${img.filename}`}
                                                            alt='Images of platform'
                                                        />
                                                    </Button>
                                                </Fancybox>
                                            )
                                        )
                                    ) : (
                                        <img
                                            src={noImage}
                                            alt="No platform's images"
                                        />
                                    )
                            )}
                        </Carousel>
                    </Box>

                    <Box sx={{ textAlign: 'left', m: '20px 70px' }}>
                        <Title>{t('search.catalog.platforms')}</Title>
                        {data.platforms.map(
                            (platform: ContentPagePlatformProps) => (
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
                            )
                        )}

                        <Title>{t('search.catalog.desc')}</Title>
                        <Box sx={{ mb: '30px', fontSize: '18px' }}>
                            <ReactMarkdown children={data.place.description} />
                        </Box>
                    </Box>
                </Box>
            )}
            <Footer />
        </>
    );
};

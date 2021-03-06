import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Button } from '@mui/material';
import Fancybox from 'components/Fancybox/Fancybox';
import addressIcon from 'image/SearchPage/address.svg';
import subwayIcon from 'image/SearchPage/subway.svg';
import timetableIcon from 'image/SearchPage/timetable.svg';
import noImages from 'image/noImage.png';
import { CardPlaceProps } from 'types/Search';
import { DescCard, Card } from 'style/search/cardPlace';
import { path } from 'enum';

export const CardPlace: React.FC<CardPlaceProps> = ({
    images,
    title,
    address,
    subway,
    timetable,
    price,
}) => {
    const { t } = useTranslation();

    return (
        <Card>
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>
                    {title && title.toUpperCase()}
                </Typography>
                <DescCard sx={{ justifyContent: 'space-evenly' }}>
                    {images ? (
                        images.map((img: any) => (
                            <Fancybox
                                key={img.filename}
                                options={{ infinite: false }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Button
                                    data-fancybox='gallery'
                                    data-src={`${path.SERVER_URL}/${img.destination}/${img.filename}`}
                                >
                                    <img
                                        src={`${path.SERVER_URL}/${img.destination}/${img.filename}`}
                                        alt='Images of platform'
                                        style={{
                                            height: '140px',
                                            minWidth: '80px',
                                        }}
                                    />
                                </Button>
                            </Fancybox>
                        ))
                    ) : (
                        <img
                            style={{
                                maxWidth: '200px',
                                maxHeight: '130px',
                                marginRight: '5px',
                            }}
                            src={noImages}
                            alt="Platform's images"
                        />
                    )}
                </DescCard>

                <DescCard>
                    <img src={addressIcon} alt='Address icon' />
                    <Typography sx={{ ml: '5px' }}>{address}</Typography>
                </DescCard>

                <DescCard>
                    <img src={subwayIcon} alt='Subway icon' />
                    <Typography sx={{ ml: '5px' }}>{subway}</Typography>
                </DescCard>

                <DescCard>
                    <img src={timetableIcon} alt='Timetable icon' />
                    <Typography sx={{ ml: '5px' }}>{timetable}</Typography>
                </DescCard>

                <Typography
                    sx={{
                        textAlign: 'right',
                        fontWeight: 'bold',
                        fontSize: '25px',
                    }}
                >
                    {price} {t('search.cardPlace.price')}
                </Typography>
            </Box>
        </Card>
    );
};

/* eslint-disable react/no-children-prop */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Box, Modal } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import Fancybox from 'components/Fancybox/Fancybox';
import { BookingModal } from 'components/Search/BookingModal/BookingModal';
import { FlexDiv, styleModal } from 'style/otherStyles';
import { CardWrapper, Card, Subtitle } from 'style/search/catalogPlatformCard';
import { CatalogPlatformCardProps } from 'types/Search';
import { CheckedPlaceDB } from 'types/Databases';
import { ContentCompanyImages } from 'types/Cabinet';
import { path } from 'enum';

export const CatalogPlatformCard: React.FC<CatalogPlatformCardProps> = ({
    idPlace,
    idPlatform,
    nameCompany,
    namePlatform,
    square,
    rider,
    comfort,
    services,
    images,
    products,
}) => {
    const [showMore, setShowMore] = React.useState<boolean>(false);
    const comfortChecked = comfort.filter((item) => {
        if (item.checked) {
            return item;
        }
        return false;
    });
    const servicesChecked = services.filter((item) => {
        if (item.checked) {
            return item;
        }
        return false;
    });

    const [open, setOpen] = React.useState<boolean>(false);
    const { t } = useTranslation();

    return (
        <Card>
            <CardWrapper>
                <Subtitle sx={{ fontWeight: 'bold' }}>{namePlatform}</Subtitle>
                <FlexDiv
                    sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                    <CropSquareIcon fontSize='small' />
                    <Typography>
                        {square} {t('search.catalogPlatformCard.metre')}
                        <sup>2</sup>
                    </Typography>
                </FlexDiv>
                <Subtitle>{t('search.catalogPlatformCard.subtitle')}</Subtitle>

                {!showMore ? (
                    <>
                        <ReactMarkdown
                            children={rider.slice(0, 100).concat('...')}
                        />

                        <Button
                            sx={{
                                color: 'blue',
                                p: 0,
                                m: 0,
                                minWidth: 0,
                            }}
                            onClick={() => setShowMore(true)}
                        >
                            {t('search.catalogPlatformCard.more')}
                        </Button>
                    </>
                ) : (
                    <ReactMarkdown children={rider} />
                )}

                {showMore && (
                    <>
                        {comfortChecked[0] && (
                            <>
                                <Subtitle>
                                    {t('search.catalogPlatformCard.comfort')}
                                </Subtitle>
                                {comfortChecked.map((item: CheckedPlaceDB) => (
                                    <Typography key={item.id}>
                                        {t(`dbComfortPlace.item${item.id}`)}
                                    </Typography>
                                ))}
                            </>
                        )}

                        {servicesChecked[0] && (
                            <>
                                <Subtitle>
                                    {t('search.catalogPlatformCard.service')}
                                </Subtitle>
                                {servicesChecked.map((item: CheckedPlaceDB) => (
                                    <Typography key={item.id}>
                                        {t(`dbServicesPlace.item${item.id}`)}
                                    </Typography>
                                ))}
                            </>
                        )}
                    </>
                )}
            </CardWrapper>
            <Box sx={{ m: 'auto' }}>
                {images.map((img: ContentCompanyImages) => (
                    <Fancybox options={{ infinite: false }} key={img.filename}>
                        <Button
                            data-fancybox='gallery'
                            data-src={`${path.SERVER_URL}/${img.destination}${img.filename}`}
                        >
                            <img
                                style={{
                                    width: '200px',
                                    height: '130px',
                                    marginRight: '5px',
                                }}
                                src={`${path.SERVER_URL}/${img.destination}${img.filename}`}
                                alt='Images of platform'
                            />
                        </Button>
                    </Fancybox>
                ))}
            </Box>
            <Button
                onClick={() => setOpen(true)}
                sx={{ m: { xs: 'auto', md: '0 10px 0 0' } }}
            >
                {t('search.catalogPlatformCard.buttonBooking')}
            </Button>
            {open && (
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                    sx={{ overflow: 'scroll' }}
                >
                    <Box sx={styleModal}>
                        <BookingModal
                            idPlace={idPlace}
                            idPlatform={idPlatform}
                            nameCompany={nameCompany}
                            namePlatform={namePlatform}
                            products={products}
                        />
                    </Box>
                </Modal>
            )}
        </Card>
    );
};

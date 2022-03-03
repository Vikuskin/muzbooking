/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { Typography, Button, styled, Box, Modal } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { FlexDiv, TitleH2 } from 'style/otherStyles';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import { CheckedPlace } from 'components/databases/dbCheckboxs';
import Fancybox from 'components/Fancybox/Fancybox';
import { StateProducts } from 'components/Cabinet/ContentPage/ContentPagePlatform';
import { BookingModal } from 'components/SearchPage/BookingModal';

const Subtitle = styled(TitleH2)({
    padding: 0,
    marginBottom: '5px',
    marginTop: '20px',
});

const Card = styled(FlexDiv)({
    padding: '20px',
    border: '2px solid #e2e2e2',
    borderRadius: '4px',
    backgroundColor: '#ebeff2',
    marginBottom: '30px',
});
const style = {
    position: 'absolute' as 'absolute',
    top: '10%',
    bottom: '10%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
};

interface CatalogPlatformCardProps {
    idPlace: string;
    idPlatform: string;
    namePlatform: string;
    nameCompany: string;
    square: string;
    rider: string;
    comfort: Array<CheckedPlace>;
    services: Array<CheckedPlace>;
    images: Array<string>;
    products: Array<StateProducts>;
}

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
    });
    const servicesChecked = services.filter((item) => {
        if (item.checked) {
            return item;
        }
    });

    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <Card>
            <Box sx={{ flexBasis: '30%', fontSize: '1rem', lineHeight: 1.5 }}>
                <Subtitle sx={{ fontWeight: 'bold' }}>{namePlatform}</Subtitle>
                <FlexDiv sx={{ justifyContent: 'flex-start' }}>
                    <CropSquareIcon fontSize="small" />
                    <Typography>
                        {square} м<sup>2</sup>
                    </Typography>
                </FlexDiv>
                <Subtitle>О площадке</Subtitle>

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
                            Еще
                        </Button>
                    </>
                ) : (
                    <ReactMarkdown children={rider} />
                )}

                {showMore && (
                    <>
                        {comfortChecked[0] && (
                            <>
                                <Subtitle>Комфорт</Subtitle>
                                {comfortChecked.map((item: any) => (
                                    <Typography>{item.value}</Typography>
                                ))}
                            </>
                        )}

                        {servicesChecked[0] && (
                            <>
                                <Subtitle>Удобства</Subtitle>
                                {servicesChecked.map((item: any) => (
                                    <Typography>{item.value}</Typography>
                                ))}
                            </>
                        )}
                    </>
                )}
            </Box>
            <Box>
                {images.map((img: any) => (
                    <Fancybox options={{ infinite: false }}>
                        <Button
                            data-fancybox="gallery"
                            data-src={`http://localhost:5000/${img.destination}/${img.filename}`}
                        >
                            <img
                                style={{
                                    width: '200px',
                                    height: '130px',
                                    marginRight: '5px',
                                }}
                                src={`http://localhost:5000/${img.destination}/${img.filename}`}
                                alt="Images of platform"
                            />
                        </Button>
                    </Fancybox>
                ))}
            </Box>
            <Button onClick={() => setOpen(true)}>Забронировать</Button>
            {open && (
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ overflow: 'scroll' }}
                >
                    <Box sx={style}>
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

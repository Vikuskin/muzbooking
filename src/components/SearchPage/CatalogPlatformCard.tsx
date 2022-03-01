/* eslint-disable react/no-children-prop */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { Typography, Button, styled } from '@mui/material';
import { FlexDiv, TitleH2 } from 'style/otherStyles';
import { Box } from '@mui/system';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import { CheckedPlace } from 'components/databases/dbCheckboxs';
import Fancybox from 'components/Fancybox/Fancybox';
import ReactMarkdown from 'react-markdown';

const Subtitle = styled(TitleH2)({
    padding: 0,
    marginBottom: '5px',
});

interface CatalogPlatformCardProps {
    namePlatform: string;
    square: string;
    rider: string;
    comfort: Array<CheckedPlace>;
    services: Array<CheckedPlace>;
    images: Array<string>;
}

export const CatalogPlatformCard: React.FC<CatalogPlatformCardProps> = ({
    namePlatform,
    square,
    rider,
    comfort,
    services,
    images,
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

    return (
        <FlexDiv
            sx={{
                padding: '20px',
                border: '2px solid #e2e2e2',
                borderRadius: '4px',
                backgroundColor: '#ebeff2',
                mb: '30px',
            }}
        >
            <Box sx={{ flexBasis: '30%' }}>
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
                        <Typography>
                            <ReactMarkdown children={rider.slice(0, 100)}/>...
                        </Typography>

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
                   <ReactMarkdown children={rider}/>
                )}

                {showMore ? (
                    <>
                        {comfortChecked[0] ? (
                            <>
                                <Subtitle>Комфорт</Subtitle>
                                {comfortChecked.map((item: any) => (
                                    <Typography>{item.value}</Typography>
                                ))}
                            </>
                        ) : (
                            <></>
                        )}

                        {servicesChecked[0] ? (
                            <>
                                <Subtitle>Удобства</Subtitle>
                                {servicesChecked.map((item: any) => (
                                    <Typography>{item.value}</Typography>
                                ))}
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <>...</>
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
            <Button>Забронировать</Button>
        </FlexDiv>
    );
};

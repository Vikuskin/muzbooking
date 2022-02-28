import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import addressIcon from 'image/SearchPage/address.svg';
import subwayIcon from 'image/SearchPage/subway.svg';
import timetableIcon from 'image/SearchPage/timetable.svg';
import { FlexDiv } from 'style/otherStyles';

interface CardProps {
    imgFolder: string;
    title: string;
    address: string;
    subway: string;
    timetable: string;
    price: number;
}

const Card = styled('div')({
    width: '100%',
    fontSize: '20px',
    margin: 'auto',
    marginBottom: '10px',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'left',
    verticalAlign: 'baseline',
    boxShadow: '0px 0px 10px rgba(0,0,0,.25)',
});

const DescCard = styled(FlexDiv)({
    justifyContent: 'flex-start',
    marginBottom: '10px',
});

export const CardPlace: React.FC<CardProps> = ({
    imgFolder,
    title,
    address,
    subway,
    timetable,
    price,
}) => {
    console.log(imgFolder);
   
    return (
        <Card>
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <DescCard>
                    <img src="images/621ce1cc90f6c9262cdec4f9/" alt="Images" />
                    {/* {img.map((photo: string) => (
                    <img style={{ width: '32%' }} src={photo} alt='Images of platform'/>
                ))} */}
                </DescCard>

                <DescCard>
                    <img src={addressIcon} alt="Address icon" />
                    <Typography sx={{ ml: '5px' }}>{address}</Typography>
                </DescCard>

                <DescCard>
                    <img src={subwayIcon} alt="Subway icon" />
                    <Typography sx={{ ml: '5px' }}>{subway}</Typography>
                </DescCard>

                <DescCard>
                    <img src={timetableIcon} alt="Timetable icon" />
                    <Typography sx={{ ml: '5px' }}>{timetable}</Typography>
                </DescCard>

                <Typography
                    sx={{
                        textAlign: 'right',
                        fontWeight: 'bold',
                        fontSize: '25px',
                    }}
                >
                    {price} ₽/ч
                </Typography>
            </Box>
        </Card>
    );
};
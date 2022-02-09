import { Box } from '@mui/material';
import * as React from 'react';

interface CardProps {
    title: string,
    img: string,
    icon: string,
    description: string
}

export const Cards: React.FC<CardProps> = (props) => {

    return (
    <Box sx={{ width: { xs: '200px', sm: 300, md: 350 }, height: { xs: '220px', sm: 320, md: 380 }, margin: { xs: '0 0 10px 0' } }}>
    <Box sx={{
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'end',
    }}>
        <Box sx={{
             textAlign: 'center',
             color: 'black',
             backgroundColor: 'white',
             opacity: 0.6,
             padding: '20px 5px',
             margin: 0,
             width: '100%',
             minHeight: {xs: '50px', md: '100px'},
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
        }}>
            <Box sx={{ fontSize: { xs: '15px', sm: '20px', md: '25px' }, margin: { xs: '0 10px' } }}>
               {props.title.toUpperCase()} 
            </Box>
        </Box>
    </Box>
    </Box>
  );
}
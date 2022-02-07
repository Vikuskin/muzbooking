import { Box } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components'

interface CardProps {
    title: string,
    img: string,
    icon: string,
    description: string
}

const Card = styled.div`
    background-image: ${({ img }: {img: any}) => `url(${img})`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
`;

const CardTitle = styled.p`
    text-align: center;
    color: black;
    background-color: white;
    opacity: 0.6;
    padding: 20px 5px;
    margin: 0;
    width: 100%
`;

export const Cards: React.FC<CardProps> = (props) => {

    return (
    <Box sx={{ width: { xs: 250, sm: 300, md: 350 }, height: { xs: 280, sm: 320, md: 380 }, margin: { xs: '0 0 10px 0' } }}>
    <Card img={props.img}>
        <CardTitle>
            <Box sx={{ fontSize: { xs: '15px', sm: '20px', md: '25px' }, margin: { xs: '0 10px' } }}>
               {props.title.toUpperCase()} 
            </Box>
        </CardTitle>
    </Card>
    </Box>
  );
}
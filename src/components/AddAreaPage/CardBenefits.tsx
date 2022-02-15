import React from 'react';
import { styled } from '@mui/material';
import { TitleH2, FlexDiv } from 'style/otherStyles';

interface CardBenefitsProps {
    img: string;
    description: string;
}

const Card = styled('div')({
    width: '275px',
    height: '270px',
    fontSize: '20px',
    backgroundColor: '#FFEAC2',
    margin: 'auto',
    marginBottom: '10px',
    borderRadius: '25px',
    padding: '28px 22px 20px',
    textAlign: 'center',
    verticalAlign: 'baseline',
    '@media (max-width: 599px)': {
        height: '200px',
    },
});

export const CardBenefits: React.FC<CardBenefitsProps> = ({
    img,
    description,
}) => (
    <Card>
        <FlexDiv sx={{ flexDirection: 'column', height: '100%' }}>
            <img
                src={img}
                style={{ maxWidth: '200px', maxHeight: '80px' }}
                alt={description}
            />
            <TitleH2 sx={{ fontSize: '20px' }}>{description}</TitleH2>
        </FlexDiv>
    </Card>
);

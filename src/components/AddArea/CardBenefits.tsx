import React from 'react';
import { TitleH2, FlexDiv } from 'style/otherStyles';
import { CardBenefitsProps } from 'types/AddArea';
import { Card } from 'style/addArea/cardBenefits';

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

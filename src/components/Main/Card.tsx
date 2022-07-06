import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { CardProps } from 'types/Main';
import {
    Card,
    CardFrontContent,
    CardBackBottom,
    CardBackContent,
    CardBackText,
    CardFrontImage,
    CardFrontText,
} from 'style/main/card';
import { path } from 'enum';

export const Cards: React.FC<CardProps> = ({
    title,
    img,
    icon,
    description,
    id,
}) => {
    const [style, setStyle] = React.useState<string>('front-card');
    const { chooseServices } = useActions();
    const flipCard = () => {
        if (style === 'front-card') {
            setStyle('back-card');
        } else {
            setStyle('front-card');
        }
    };
    const { t } = useTranslation();

    return (
        <Card onClick={() => flipCard()}>
            {style === 'front-card' ? (
                <CardFrontImage
                    sx={{
                        backgroundImage: `url(${img})`,
                    }}
                >
                    <CardFrontContent>
                        <CardFrontText>{title.toUpperCase()}</CardFrontText>
                    </CardFrontContent>
                </CardFrontImage>
            ) : (
                <CardBackContent>
                    <img src={icon} alt={description} />
                    <CardBackText>{description}</CardBackText>
                    <Link to={path.Search}>
                        <CardBackBottom
                            onClick={() => {
                                chooseServices(id);
                                window.scrollTo(0, 0);
                            }}
                        >
                            {t('main.card.frontDesc')}
                        </CardBackBottom>
                    </Link>
                </CardBackContent>
            )}
        </Card>
    );
};

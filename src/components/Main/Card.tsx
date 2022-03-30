import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { CardProps } from 'types/Main';
import { path } from 'enum';

const Card = styled('div')({
    margin: 'auto',
    transform: 'rotateY(360deg)',
    transition: 'all ease-in-out .5s',
    boxShadow: '0 4px 30px rgba(0,0,0,.25)',
    cursor: 'pointer',
    width: '300px',
    height: '320px',
    borderRadius: '60px',
    marginBottom: '10px',
    '@media (max-width: 899px)': {
        width: '250px',
        height: '280px',
    },
    '@media (max-width: 599px)': {
        width: '250px',
        height: '320px',
    },
});

const CardFrontImage = styled('div')({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    transform: 'rotateY(360deg)',
    overflow: 'hidden',
    borderRadius: '60px',
});

const CardFrontContent = styled('div')({
    width: '100%',
});

const CardFrontText = styled('div')({
    fontSize: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
    minHeight: '100px',
    textAlign: 'center',
    backgroundColor: 'white',
    '@media (max-width: 899px)': {
        fontSize: '20px',
    },
    '@media (max-width: 599px)': {
        fontSize: '15px',
        minHeight: '70px',
    },
});

const CardBackContent = styled('div')({
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: 'rotateY(360deg)',
    padding: '10px',
    width: '100%',
    height: '100%',
    borderRadius: '60px',
});

const CardBackText = styled('div')({
    fontSize: '15px',
    '@media (max-width: 899px)': {
        fontSize: '13px',
    },
    '@media (max-width: 599px)': {
        fontSize: '13px',
        margin: '0 10px',
        minHeight: '50px',
    },
});

const CardBackBottom = styled('button')({
    textTransform: 'uppercase',
    padding: '10px',
    fontSize: '20px',
    color: 'black',
    borderRadius: '10px',
    background: '#FFDBB8',
    lineHeight: '1',
    maxWidth: '200px',
    '@media (max-width: 1199px)': {
        fontWeight: 'normal',
        fontSize: '20px',
    },
    '@media (max-width: 899px)': {
        fontSize: '18px',
        textTransform: 'lowercase',
        padding: '5px 10px',
    },
    '@media (max-width: 599px)': {
        fontSize: '15px',
        padding: '10px 15px 10px 15px',
        maxWidth: '150px',
        marginBottom: '5px',
    },
});

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

import { styled } from '@mui/material';

export const Card = styled('div')({
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

export const CardFrontImage = styled('div')({
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

export const CardFrontContent = styled('div')({
    width: '100%',
});

export const CardFrontText = styled('div')({
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

export const CardBackContent = styled('div')({
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

export const CardBackText = styled('div')({
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

export const CardBackBottom = styled('button')({
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

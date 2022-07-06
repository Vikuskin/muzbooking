import { styled, Box } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

export const AccountTitleH1 = styled('h1')({
    textAlign: 'left',
    margin: 0,
    marginBottom: '23px',
    backgroundColor: '#f89623',
    color: 'white',
    padding: '20px',
    fontSize: '25px',
    '@media (max-width: 1200px)': {
        fontSize: '20px',
        minHeight: '80px',
    },
    '@media (max-width: 600px)': {
        fontSize: '18px',
    },
});

export const OrangeCircleIcon = styled(AddCircle)({
    color: '#f89623',
    fontSize: '60px',
    textAlign: 'center',
    width: '100%',
});

export const Wrapper = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
});

export const MainInfo = styled(Box)({
    width: '45%',
    minWidth: '300px',
    marginRight: '15px',
    marginBottom: '30px',
    padding: '30px',
    '@media (max-width: 900px)': {
        width: '100%',
        marginRight: 0,
    },
    '@media (max-width: 600px)': {
        padding: 0,
    },
});

export const Platforms = styled(Box)({
    width: '45%',
    minWidth: '300px',
    padding: '30px',
    '@media (max-width: 900px)': {
        width: '100%',
        marginRight: 0,
    },
    '@media (max-width: 600px)': {
        padding: 0,
    },
});

import { styled } from '@mui/material';
import { CustomButton } from 'style/otherStyles';

export const LoginWindow = styled('div')({
    backgroundColor: '#fff',
    maxWidth: '40%',
    padding: '40px 60px',
    textAlign: 'left',
    '@media (max-width: 899px)': {
        maxWidth: '60%',
    },
    '@media (max-width: 599px)': {
        maxWidth: '70%',
        padding: '20px 40px',
    },
});

export const Button = styled(CustomButton)({
    fontWeight: 'normal',
    width: '100%',
    marginLeft: 0,
    fontSize: '15px',
    padding: '10px 20px',
    display: 'block',
    maxWidth: '100%',
});

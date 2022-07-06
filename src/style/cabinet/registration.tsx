import { styled } from '@mui/material';

export const RegistrationWindow = styled('div')({
    backgroundColor: '#fff',
    maxWidth: '55%',
    padding: '40px 30px',
    textAlign: 'left',
    '@media (max-width: 599px)': {
        maxWidth: '80%',
    },
});

export const FormColumn = styled('div')({
    width: '267px',
    '@media (max-width: 599px)': {
        width: '100%',
    },
});

export const Button = styled('button')({
    textTransform: 'uppercase',
    padding: '5px',
    fontSize: '15px',
    lineHeight: '36px',
    color: '#000000',
    borderRadius: '4px',
    background: '#FFDBB8',
    marginTop: '20px',
    marginBottom: '20px',
    width: '267px',
    '@media (max-width: 899px)': {
        width: '100%',
        maxWidth: '267px',
    },
});

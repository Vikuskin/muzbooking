import { styled } from '@mui/material';

export const Card = styled('div')({
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

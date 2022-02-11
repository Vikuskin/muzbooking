import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export const InputTitle = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: 'none',
        padding: '20px 8px',
        overflow: 'hidden',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
  });

export const InputSearch = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        color: 'rgba(0, 0, 0, 0.6)',
        padding: '16px 39px 16px 9px',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
    },
});

export const InputDefault = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        color: 'rgba(0, 0, 0, 0.6)',
        padding: '8px 39px 8px 9px',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
        marginBottom: '10px'
    },
});

export const TitleH1 = styled('h1')({
        textAlign: 'center', 
        fontSize: '35px', 
        fontWeight: 'bold',
        margin: 'auto',
        marginTop: '100px',
        marginBottom: '50px',
        '@media (max-width: 1200px)': {
            fontSize: '30px',
            margin: '100px 25px 40px 25px',
        },
        '@media (max-width: 899px)': {
            fontSize: '25px',
            margin: '100px 40px 30px 40px'
        },
        '@media (max-width: 599px)': {
            fontSize: '20px',
            margin: '50px 20px 20px 20px',
        }
})

export const CustomButton = styled('button')({
    textTransform: 'uppercase',
    padding: '15px 29px 15px 29px',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '36px',
    color: 'black',
    borderRadius: '10px',
    background: '#FFDBB8',
    '@media (max-width: 1200px)': {
        fontWeight: 'normal',
        fontSize: '25px',
        marginLeft: 0
    },
    '@media (max-width: 900px)': {
        fontSize: '20px'
    },
    '@media (max-width: 599px)': {
        fontSize: '15px',
        padding: '10px 15px 10px 15px',
        maxWidth: '150px',
        lineHeight: '1',
        marginBottom: '5px',
        textTransform: 'lowercase'
    }
});
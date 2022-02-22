import { ListItem, InputBase, styled } from '@mui/material';

export const InputTitle = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: 'none',
        padding: '20px 8px',
        overflow: 'hidden',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: '10px',
    },
});

export const TitleH1 = styled('h1')({
    textAlign: 'center',
    fontSize: '35px',
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: '100px',
    marginBottom: '50px',
    lineHeight: 1,
    '@media (max-width: 1200px)': {
        fontSize: '30px',
        margin: '100px 25px 40px 25px',
    },
    '@media (max-width: 900px)': {
        fontSize: '25px',
        margin: '100px 40px 30px 40px',
    },
    '@media (max-width: 600px)': {
        fontSize: '20px',
        margin: '50px 20px 20px 20px',
    },
});

export const CustomButton = styled('button')({
    textTransform: 'uppercase',
    padding: '15px 29px 15px 29px',
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'black',
    borderRadius: '10px',
    background: '#FFDBB8',
    lineHeight: '1',
    '@media (max-width: 1200px)': {
        fontWeight: 'normal',
        fontSize: '25px',
        marginLeft: 0,
    },
    '@media (max-width: 900px)': {
        fontSize: '18px',
    },
    '@media (max-width: 600px)': {
        fontSize: '15px',
        padding: '10px 15px 10px 15px',
        maxWidth: '150px',
        marginBottom: '5px',
        textTransform: 'lowercase',
    },
});

export const FlexDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const TitleH2 = styled('h2')({
    fontSize: '22px',
    fontWeight: 'normal',
    padding: '5px',
    margin: 'auto',
    '@media (max-width: 900px)': {
        fontSize: '17px',
    },
    '@media (max-width: 600px)': {
        fontSize: '15px',
    },
});

export const AccountTitleH1 = styled(TitleH1)({
    textAlign: 'left',
    margin: 0,
    marginBottom: '25px',
    backgroundColor: '#f89623',
    color: 'white',
    padding: '20px',
});

export const ContentPageListItem = styled(ListItem)({
    padding: '20px',
    border: '2px solid #e2e2e2',
    borderRadius: '4px',
    backgroundColor: '#ebeff2',
    marginBottom: '30px',
});

export const ContentPageButton = styled(CustomButton)({
    fontWeight: 'normal',
    textTransform: 'lowercase',
    padding: '10px 20px',
    fontSize: '20px',
});

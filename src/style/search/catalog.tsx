import { styled, Box } from '@mui/material';
import { FlexDiv, TitleH1 } from 'style/otherStyles';

export const BoxMainInfo = styled(Box)({
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'left',
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
    },
});

export const MainInfoDesc = styled(FlexDiv)({
    marginRight: '5px',
    fontSize: '16px',
    textAlign: 'left',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
        marginRight: '0',
        fontSize: '14px',
        marginBottom: '5px',
    },
});

export const Title = styled(TitleH1)({
    textAlign: 'left',
    margin: '0',
    '@media (max-width: 600px)': {
        textAlign: 'center',
    },
});

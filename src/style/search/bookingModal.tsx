import { styled } from '@mui/material';
import { TitleH1, FlexDiv } from 'style/otherStyles';

export const Title = styled(TitleH1)({
    textAlign: 'left',
    margin: '0 5px',
    '@media (max-width: 600px)': {
        textAlign: 'center',
    },
});

export const TitleInfo = styled(FlexDiv)({
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
        textAlign: 'center',
        marginBottom: '15px',
    },
});

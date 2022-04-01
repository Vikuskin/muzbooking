import { styled, InputBase, Card, Box } from '@mui/material';
import { FlexDiv } from 'style/otherStyles';

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

export const Main = styled(FlexDiv)({
    alignItems: 'flex-start',
    minHeight: '800px',
    padding: '5px 20px',
    '@media (max-width: 600px)': {
        flexWrap: 'wrap',
    },
});

export const MainWrapper = styled(Box)({
    display: 'flex',
    width: '100%',
    '@media (max-width: 600px)': {
        flexWrap: 'wrap',
    },
});

export const Filters = styled(Box)({
    flexBasis: '40%',
    textAlign: 'left',
    paddingRight: '20px',
    '@media (max-width: 600px)': {
        paddingRight: 0,
        flexBasis: '100%',
    },
});

export const Places = styled(Box)({
    width: '100%',
    minWidth: '280px',
    paddingRight: '20px',
    height: '800px',
    overflowY: 'scroll',
    '@media (max-width: 900px)': {
        paddingRight: 0,
    },
});

export const MapWrapper = styled('div')({
    minWidth: '45%',
    borderRadius: '10px',
    height: '800px',
    '@media (max-width: 900px)': {
        minWidth: '100%',
        height: '500px',
        marginTop: '20px',
    },
    '@media (max-width: 600px)': {
        height: '300px',
    },
});

export const CardWrapper = styled(Card)({
    overflow: 'visible',
    boxShadow: 'none',
    padding: '5px',
});

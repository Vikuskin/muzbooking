import { styled } from '@mui/material';

export const Slide = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    '@media (max-width: 899px)': {
        flexWrap: 'wrap',
    },
});

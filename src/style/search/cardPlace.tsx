import { styled } from '@mui/material';
import { FlexDiv } from 'style/otherStyles';

export const Card = styled('div')({
    fontSize: '20px',
    margin: 'auto',
    marginBottom: '10px',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'left',
    verticalAlign: 'baseline',
    boxShadow: '0px 0px 10px rgba(0,0,0,.25)',
});

export const DescCard = styled(FlexDiv)({
    justifyContent: 'flex-start',
    marginBottom: '10px',
});

import { styled, Box } from '@mui/material';
import { FlexDiv, TitleH2 } from 'style/otherStyles';

export const Subtitle = styled(TitleH2)({
    padding: 0,
    marginBottom: '5px',
    marginTop: '20px',
});

export const Card = styled(FlexDiv)({
    padding: '20px',
    border: '2px solid #e2e2e2',
    borderRadius: '4px',
    backgroundColor: '#ebeff2',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    '@media (max-width: 900px)': {
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    '@media (max-width: 600px)': {
        padding: '10px',
    },
});

export const CardWrapper = styled(Box)({
    maxWidth: '400px',
    fontSize: '1rem',
    lineHeight: 1.5,
    '@media (max-width: 600px)': {
        maxWidth: '100%',
    },
});

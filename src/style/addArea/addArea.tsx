import { styled, Box } from '@mui/material';
import { TitleH1, CustomButton, FlexDiv } from 'style/otherStyles';
import bgMain from 'image/AddAreaPage/bgMain.png';

export const List = styled('ul')({
    color: 'black',
    backgroundColor: '#ccc',
    maxWidth: '800px',
    padding: '0 110px',
    textAlign: 'left',
    fontSize: '25px',
    lineHeight: '1',
    listStyle: 'inside',
    '@media (max-width: 899px)': {
        padding: '0 50px',
        fontSize: '22px',
        maxWidth: '100%',
        textAlign: 'center',
    },
    '@media (max-width: 599px)': {
        padding: '0 30px',
        fontSize: '1rem',
    },
});

export const ButtonDiv = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'bottom',
    paddingRight: '110px',
    margin: '15px',
    '@media (max-width: 1199px)': {
        paddingRight: '0',
    },
    '@media (max-width: 899px)': {
        justifyContent: 'center',
        margin: '5px',
    },
    '@media (max-width: 599px)': {
        flexDirection: 'column',
        margin: 'auto',
    },
});

export const MainContent = styled('div')({
    backgroundImage: `url(${bgMain})`,
    height: '800px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: '150px',
    '@media (max-width: 599px)': {
        height: '640px',
    },
});

export const TitleH1MainContent = styled(TitleH1)({
    color: 'white',
    maxWidth: '1300px',
    textAlign: 'left',
    padding: '0 110px',
    margin: 0,
    fontSize: '35px',
    '@media (max-width: 1199px)': {
        fontSize: '35px',
    },
    '@media (max-width: 899px)': {
        textAlign: 'center',
        padding: '0 50px',
    },
    '@media (max-width: 599px)': {
        padding: 0,
        fontSize: '25px',
        marginTop: 0,
    },
});

export const ButtonMainContent = styled(CustomButton)({
    margin: '15px',
    minWidth: '140px',
    '@media (max-width: 899px)': {
        margin: '5px',
        minWidth: '140px',
    },
});

export const BenefitsStrip = styled(FlexDiv)({
    padding: '40px',
    background: 'rgba(255, 127, 0, 0.26)',
    flexWrap: 'nowrap',
    margin: 'auto',
    marginBottom: '50px',
    '@media (max-width: 599px)': {
        flexWrap: 'wrap',
    },
});

export const WrapDiv = styled(FlexDiv)({
    flexWrap: 'nowrap',
    '@media (max-width: 599px)': {
        flexWrap: 'wrap',
    },
});

export const TitleH1BenefitsMid = styled(TitleH1)({
    margin: '0 0 20px 0',
    '@media (max-width: 899px)': {
        fontSize: '20px',
    },
    '@media (max-width: 599px)': {
        fontSize: '18px',
    },
});

export const BenefitsMid1 = styled(Box)({
    paddingRight: '40px',
    paddingLeft: '40px',
    minWidth: '220px',
    maxWidth: '620px',
    margin: 'auto',
    marginBottom: '20px',
    marginTop: 0,
});

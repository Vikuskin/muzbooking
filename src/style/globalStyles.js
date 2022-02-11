import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        boxSizing: 'border-box',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        margin: '0',
        fontSize: '20px',
        color: 'black',
        textAlign: 'center',
        width: '100%',
        height: '100%',
      },
      img: {
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        '&:hover': {
          opacity: '0.5'
        },
      },
      ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
      },
      'h1, h2, h3': {
        padding: '0',
        margin: '0',
        lineHeight: '1'
      },
      p: {
        padding: '0',
        margin: '0',
      },
      button: {
        cursor: 'pointer',
        '&:hover': {
          opacity: '0.5'
        },
      },
      '.rec.rec-arrow': {
        border: 'none',
        backgroundColor: 'transparent',
        boxShadow: 'none'
      },
      '.flip-card': {
        transform: 'rotateY(180deg)',
      },
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
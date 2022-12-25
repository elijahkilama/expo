/* eslint-disable import/no-mutable-exports */
import { createTheme } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme(theme, {
    direction: 'ltr',

    palette: {
        mode: 'light',
        common: {
            white: '#FFF',
            // black: '#282828',
        },
        primary: {
            fontFamily: 'Inter',
            main: '#293F6D',
        },
        secondary: {
            fontFamily: 'Inter',
            main: '#06B79E',
        },
        text: {
            fontFamily: 'Inter',
            primary: '#293F6D',
            secondary: '#06B79E',
            disabled: 'gray',
        },
        divider: 'rgba(0,0,0,0.12)',
        background: {
            paper: '#FFF',
            default: '#FFF',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: '#06B79E',
                    color: '#FFF',
                    '&:hover': {
                        fontWeight: 600,
                        fontFamily: 'Inter',
                        color: '#FFF',
                        background: '#06B79E',
                    },
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                    fontWeight: 'lighter',
                    fontFamily: 'Inter',
                    color: '#8C95A8',
                    paddingTop: '2px',
                    paddingBottom: '7px',
                    height: '50px',
                    backgroundColor: '#FFF',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFF',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Inter'), url(./assets/font/Inter/static/Inter-Regular.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
    actions: {
        focus: '#1B333C',
        hover: '#1B333C',
    },
    typography: {
        h1: {
            fontFamily: 'Inter',
            fontSize: '30px',
            color: '#293F6D',
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: '30px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '20px',
                fontWeight: 'bold',
                lineHeight: '20px',
            },
        },
        h2: {
            fontFamily: 'Inter',
            fontSize: '15px',
            color: '#FFF',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '30px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '13px',
                fontWeight: 'bold',
                lineHeight: '20px',
            },
        },
        body1: {
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#8B94AA',
            fontStyle: 'normal',
            fontWeight: 300,
            [theme.breakpoints.down('sm')]: {
                fontSize: '12px',
                fontWeight: 300,
            },
        },
        body2: {
            fontFamily: 'Inter',
            fontSize: '12px',
            color: '#FFF',
            fontStyle: 'normal',
            fontWeight: 300,
            [theme.breakpoints.down('sm')]: {
                fontSize: '10px',
                fontWeight: 300,
            },
        },
        subtitle1: {
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#536F6C',
            fontStyle: 'normal',
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                fontSize: '12px',
                fontWeigh: 500,
            },
        },
        subtitle2: {
            fontFamily: 'Inter',
            fontSize: '12px',
            color: '#FFF',
            fontStyle: 'normal',
            fontWeight: 600,
            [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
                fontWeigh: 200,
            },
        },
        caption: {
            fontFamily: 'Inter',
            fontSize: '12px',
            color: '#222123',
            fontStyle: 'normal',
            fontWeight: 200,
            [theme.breakpoints.down('sm')]: {
                fontSize: '8px',
                fontWeigh: 200,
            },
        },
    },
});

export default theme;

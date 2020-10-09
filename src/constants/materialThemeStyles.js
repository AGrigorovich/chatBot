import { createMuiTheme } from '@material-ui/core/styles';

const materialThemeStyles = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: 'SFProText-Regular',
    },
    palette: {
        black: '#000000',
        white: '#FFFFFF',
        gold: '#FFDF00',
        mainMenuHover: '#ff9900',
        mainPageMenu: '#e39a21',
        red: '#e70b0b',
        silver: '#C0C0C0',
    },
    overrides: {
        MuiInput: {
            input: {
                backgroundColor: '#FFFFFF',
                border: `.075rem solid #000000`,
                borderRadius: '.75rem',
                padding: '.5rem',
            },
        },
        MuiInputLabel: {
            root: {
                width: '100%',
                fontSize: '1.25rem',
                padding: '.5rem 0',
                color: '#FFDF00',
            },
        },
        MuiFormControlLabel: {
            root: {
                marginLeft: 0,
            },
        },
    },
});

export default materialThemeStyles;

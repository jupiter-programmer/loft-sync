import { createTheme } from '@mui/material';
export const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: 10,
                    paddingRight: 10,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--space-grotesk)',
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'text',
            },
            styleOverrides: {
                root: {
                    fontFamily: 'var(--space-grotesk)',
                    textTransform: 'capitalize',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    color: '#eee0ff',
                    margin: '20px 0px',
                    ':before, :after': {
                        borderTop: 'thin solid #261644',
                    },
                },
            },
        },
    },
});
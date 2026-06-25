import { createTheme } from '@mui/material';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#b41cdd',
        },
    },
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
                    color: 'var(--lightpink)',
                    fontFamily: 'var(--space-grotesk)',
                    textTransform: 'capitalize',
                },
            },
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
                placement: 'auto',
                describeChild: true,
            },
            styleOverrides: {
                tooltip: {
                    background: 'var(--gradient-secondary)',
                    color: 'var(--lightpink)',
                },
                arrow: {
                    color: '#b41cdd',
                },
            },
        },
    },
});
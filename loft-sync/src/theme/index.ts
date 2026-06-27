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
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: 'var(--lightpink)',
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
                    background: 'var(--gradient-primary)',
                    color: 'var(--lightpink)',
                },
                arrow: {
                    color: '#b41cdd',
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    width: 200,
                    color: 'var(--lightpink)',
                    background: '#08062f',
                    border: '1px solid var(--border)',
                    filter: 'drop-shadow(0px 2px 8px #b31cdd1e)',
                    overflow: 'visible',
                    borderRadius: 10,
                    padding: '0px 10px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: 15,
                    fontFamily: 'var(--space-grotesk)',
                    color: 'var(--lightpink)',
                    borderRadius: 6,
                    'svg': {
                        fontSize: 20,
                        color: 'var(--lightpink)',
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: '10px 0px',
                    borderColor: 'var(--border)',
                },
            },
        },
    },
});
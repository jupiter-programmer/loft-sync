import Link from 'next/link';
import { Button, Stack } from '@mui/material';
export default function AuthRedirect () {
    return (
        <Stack
            direction='row' 
            spacing={2} 
            sx={styles.flexbox}
        >
            <Link href='/login'>
                <Button sx={{ 
                    ...styles.button,
                    border: '1px solid var(--border)', 
                }}>
                    Login
                </Button>
            </Link>
            <Link href='/register'>
                <Button sx={{ 
                    ...styles.button,
                    background: 'var(--gradient-primary)',
                }}>
                    Get Started
                </Button>
            </Link>
        </Stack>
    );
};
const styles = {
    flexbox: { 
        display: { 
            xs: 'none',
            md: 'inherit', 
        },
    },
    button: {
        px: 2.3,
        py: 1.2,
        borderRadius: 2,
    },
};
import { Box, Button } from '@mui/material';
import { IoSearch } from '@/assets/icons';
export default function SearchBox () {
    return (
        <Box sx={styles.container}>
            <Box 
                component='input' 
                type='text' 
                placeholder='Search here...' 
                sx={styles.input}
            />
            <Button sx={styles.button}>
                <IoSearch/>
            </Button>
        </Box>
    );
};
const styles = {
    container: { 
        display: { xs: 'none', md: 'inherit' },
    },
    input: {
        pl: 2,
        pr: 6,
        height: 35,
        width: 300,
        background: '#08062f',
        color: 'var(--lightpink)',
        border: '1px solid #1d1252',
        borderRadius: 2,
        outline: 0,
        '::placeholder': {
            color: 'var(--lightpink)',
        },
        ':focus': {
            border: '1px solid transparent',
            background: `
                linear-gradient(#08062f, #08062f) padding-box,
                var(--gradient-secondary) border-box    
            `,
        },
    },
    button: {
        position: 'aboslute',
        right: 40,
        top: 2,
        height: 35,
        minWidth: 35,
        fontSize: 20,
        borderRadius: '50%',
    },
};
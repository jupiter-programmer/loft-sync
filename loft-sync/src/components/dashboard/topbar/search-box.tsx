import { Box, IconButton } from '@mui/material';
import { IoSearchOutline } from '@/assets/icons';
export default function SearchBox () {
    return (
        <Box>
            <Box sx={styles.container}>
                <Box 
                    component='input' 
                    type='text' 
                    placeholder='Search here...' 
                    sx={styles.input}
                />
                <IconButton sx={styles.button}>
                    <IoSearchOutline/>
                </IconButton>
            </Box>
            <IconButton sx={{ display: { xs: 'inherit', md: 'none' }}}>
                <IoSearchOutline/>
            </IconButton>
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
        width: 250,
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
                var(--gradient-primary) border-box    
            `,
        },
    },
    button: {
        position: 'aboslute',
        right: 40,
        top: 0.2,
        fontSize: 20,
    },
};
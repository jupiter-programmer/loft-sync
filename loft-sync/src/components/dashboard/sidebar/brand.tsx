import Image from 'next/image';
import { Box } from '@mui/material';
import { Logo } from '@/assets/images';
export const Brand = () => {
    return (
        <Box sx={styles.parent}>
            <Image 
                src={Logo} 
                style={styles.logo} 
                loading='eager'
                alt='logo_loft-sync'
            />
        </Box>
    );
};
const styles = {
    parent: { 
        flex: 0, 
        pl: 1.8,
        pr: 3, 
        py: 1,
    },
    logo: { 
        height: 60, 
        width: 150,
    },
};
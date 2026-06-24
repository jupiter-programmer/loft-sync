import Image from 'next/image';
import { Box } from '@mui/material';
import { Logo } from '@/assets/images';
export const Brand = () => {
    return (
        <Box sx={{ 
            flex: 0, 
            pl: 1.8,
            pr: 3, 
            py: 1,
        }}>
            <Image src={Logo} style={{ 
                height: 60, 
                width: 150,
            }} alt='logo_loft-sync'/>
        </Box>
    );
};
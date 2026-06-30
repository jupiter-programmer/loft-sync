import Image from 'next/image';
import { Box, Container } from '@mui/material';
import Navbar from './navbar';
import AuthRedirect from './auth-redirect';
import MobileNav from './mobile-nav';
import { Logo } from '@/assets/images';
export default function Header () {
    return (
        <Box component='header' sx={styles.header}>
            <Container sx={styles.container}>
                <Image 
                    src={Logo} 
                    height={55} 
                    alt='logo_loft-sync'
                    style={{ marginTop: -8 }}
                />
                <Navbar/>
                <AuthRedirect/>
                <MobileNav/>
            </Container>
        </Box>
    );
};
const styles = {
    header: {
        py: { xs: 2, md: 0 },
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};
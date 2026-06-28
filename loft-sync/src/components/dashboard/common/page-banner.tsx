import { Box } from '@mui/material';
import { BG_DashboardBanner } from '@/assets/images';
export default function PageBanner () {
    return (
        <Box sx={{
            position: 'absolute',
            top: -80,
            left: 0,
            width: '100%',
            height: 350,
            background: `url(${BG_DashboardBanner.src}) no-repeat`,
            backgroundPosition: 'right',
            backgroundSize: 'cover',
            zIndex: -1,
        }}/>
    );
};
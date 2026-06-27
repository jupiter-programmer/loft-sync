import { BG_DashboardBanner } from "@/assets/images";
import { PageTitle } from "@/components/dashboard";
import { Box, Container } from "@mui/material";
import Image from "next/image";

export default function ProfilePage () {
    return (
        <Box>
            <Box sx={{ position: 'relative', top: -77, zIndex: -1 }}>
                <Image src={BG_DashboardBanner} style={{ 
                    width: '100%', 
                    height: 'auto', 
                    position: 'absolute',
                    overflow: 'hidden'
                }} alt='dashboard-banner'/>
            </Box>
            <Box sx={{ px: 2, pt: 10 }}>
                <PageTitle
                    title='Profile'
                    subtitle='Manage your personal information and account preferences'
                />
                <Box sx={{
                    p: 2,
                    background: '#12023abd',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                }}>
                    <p>adad</p>
                    <p>adad</p>
                    <p>adad</p>
                    <p>adad</p>
                    <p>adad</p>
                    <p>adad</p>
                    <p>adad</p>
                    <p>adad</p>
                </Box>
            </Box>
        </Box>
    );
};
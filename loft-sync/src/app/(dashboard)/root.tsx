import { ReactNode } from 'react';
import { SidebarProvider } from '@/providers';
import Box from '@mui/material/Box';
import { Sidebar, Topbar } from '@/components/dashboard';
import { TopLoader } from '@/components/ui';
export default function DashboardRoot ({
    children
} : {
    children: ReactNode;
}) {
    return (
        <SidebarProvider>
            <TopLoader/>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 0 }}>
                    <Sidebar/>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Topbar/>
                    { children }
                </Box>
            </Box>
        </SidebarProvider>
    );  
};
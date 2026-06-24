import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Sidebar } from '@/components/dashboard';
export default function Root ({
    children
} : {
    children: ReactNode;
}) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ flex: 0 }}>
                <Sidebar/>
            </Box>
            <Box sx={{ flex: 1 }}>
                { children }
            </Box>
        </Box>
    );  
};
'use client';
import { useSidebar } from '@/hooks';
import { Box, Button } from '@mui/material';

export default function Topbar () {
    const { toggle } = useSidebar();
    return (
        <Box>
            <Button onClick={toggle}>
                Toggle
            </Button>
        </Box>
    );
};
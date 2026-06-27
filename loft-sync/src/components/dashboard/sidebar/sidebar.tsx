'use client';
import { useSidebar } from '@/hooks';
import Box from '@mui/material/Box';
import { Brand } from './brand';
import { UserCard } from './user-card';
import { ItemsContainer } from './items-container';
export default function Sidebar () {
    const { open } = useSidebar();
    return (
        <Box sx={{
            ...styles.sidebar,
            width: {
                xs: !open ? 'calc(100vw - 65px)' : 65,
                sm: open ? 270 : 65,
            },
        }}>
            <Brand/>
            <ItemsContainer/>
            <UserCard/>
        </Box>
    );  
};
const styles = {
    sidebar: {
        height: '100vh',
        background: '#000219',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 1s',
        overflow: 'hidden',
    },
};
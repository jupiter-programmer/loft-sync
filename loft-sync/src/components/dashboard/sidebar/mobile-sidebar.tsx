'use client';
import React from 'react';
import { IconButton, Drawer } from '@mui/material';
import { Brand } from './brand';
import { UserCard } from './user-card';
import { ItemsContainer } from './items-container';
import { RiMenuUnfold3Line } from '@/assets/icons';
export default function MobileSidebar () {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <IconButton 
                onClick={() => setOpen(true)}
                sx={{ 
                    mt: -0.5,
                    display: { xs: 'inherit', sm: 'none' },
                }}
            >
                <RiMenuUnfold3Line/>
            </IconButton>
            <Drawer 
                open={open} 
                sx={{ 
                    display: { sm: 'none' },
                    zIndex: 'var(--z-index)', 
                    '& .MuiDrawer-paper': styles.sidebar,
                }} 
                onClose={() => setOpen(false)}
                closeAfterTransition={false}
            >
                <Brand/>
                <ItemsContainer onItemClick={() => setOpen(false)}/>
                <UserCard onClick={() => setOpen(false)}/>
            </Drawer>
        </React.Fragment>
    );  
};
const styles = {
    sidebar: {
        width: 270,
        background: '#070019',
        borderRight: '1px solid var(--border)',
        flexDirection: 'column',
        overflow: 'hidden',
    },
};

'use client';
import { useSidebar } from '@/hooks';
import { Button, Typography } from '@mui/material';
import { RiMenuUnfold3Line, RiMenuUnfold4Line } from '@/assets/icons';
export default function SidebarToggler () {
    const { toggle, open } = useSidebar();
    return (
        <Button onClick={toggle} sx={styles.toggleButton}>
            <Typography component='span' className='mobile-icon'>
                <RiMenuUnfold3Line style={{
                    transform: open ? 'rotate(0deg)' : 'rotate(-180deg)',
                    transition: '0.5s',
                }}/>
            </Typography>
            <Typography component='span' className='desktop-icon'>
                { open ? 
                    <RiMenuUnfold4Line/> :
                    <RiMenuUnfold3Line/>
                }
            </Typography>
        </Button>
    );
};
const styles = {
    toggleButton: {
        height: 40,
        minWidth: 40,
        background: '#07042f',
        border: '1px solid var(--border-2)',
        borderRadius: '50%',
        'svg': {
            fontSize: 20,
        },
        '.mobile-icon': {
            display: { xs: 'inherit', sm: 'none' },
        },
        '.desktop-icon': {
            display: { xs: 'none', sm: 'inherit' },
        },
    },
};
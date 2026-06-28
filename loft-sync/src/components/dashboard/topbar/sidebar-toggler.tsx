'use client';
import { useSidebar } from '@/hooks';
import { Button } from '@mui/material';
import { RiMenuUnfold3Line, RiMenuUnfold4Line } from '@/assets/icons';
export default function SidebarToggler () {
    const { toggle, open } = useSidebar();
    return (
        <Button onClick={toggle} sx={styles.toggleButton}>
            { open ? 
                <RiMenuUnfold4Line/> :
                <RiMenuUnfold3Line/>
            }
        </Button>
    );
};
const styles = {
    toggleButton: {
        height: 40,
        minWidth: 40,
        fontSize: 20,
        display: { xs: 'none', sm: 'inherit' },
        background: '#07042f',
        border: '1px solid var(--border-2)',
        borderRadius: '50%',
    },
};
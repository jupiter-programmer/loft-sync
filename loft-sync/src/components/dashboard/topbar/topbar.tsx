import Box from '@mui/material/Box';
import SidebarToggler from './sidebar-toggler';
import MobileSidebar from '../sidebar/mobile-sidebar';
import SearchBox from './search-box';
import Notification from './notification';
import Message from './message';
import AccountMenu from './account-menu';
export default function Topbar () {
    return (
        <Box sx={{
            ...styles.flexbox,
            ...styles.container,
        }}>
            <Box sx={{ 
                ...styles.flexbox, 
                gap: 2,
            }}>
                <MobileSidebar/>
                <SidebarToggler/>
                <SearchBox/>
            </Box>
                <Box sx={{
                    ...styles.flexbox,
                    gap: 2,
                }}>
                    <Notification/>
                    <Message/>
                    <AccountMenu/>
                </Box>
        </Box>
    );
};
const styles = {
    container: {
        p: 2,
        background: 'transparent',
        backdropFilter: 'blur(3px)',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 1,
        zIndex: 'var(--z-index)',
    },
    flexbox: {
        display: 'flex',
        alignItems: 'center',
    },
    
};
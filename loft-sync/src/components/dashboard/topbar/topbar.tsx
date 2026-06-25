import { Badge, Box, IconButton } from '@mui/material';
import { GoBell, HiOutlineMail } from '@/assets/icons';
import SidebarToggler from './sidebar-toggler';
import SearchBox from './search-box';

export default function Topbar () {
    return (
        <Box sx={{
            ...styles.flexbox,
            ...styles.container,
        }}>
            <Box sx={{ ...styles.flexbox, gap: 2 }}>
                <SidebarToggler/>
                <SearchBox/>
            </Box>
                {/* notifications */}
                <Box sx={{
                    ...styles.flexbox,
                    gap: 2,
                }}>
                    <IconButton aria-label='notifications' sx={{ color: 'var(--lightpink)' }}>
                      <Badge
                        badgeContent={11}
                        color='primary'
                        max={10}
                      >
                        <GoBell/>
                      </Badge>
                    </IconButton>
                    <IconButton aria-label='notifications' sx={{ color: 'var(--lightpink)' }}>
                      <Badge
                        badgeContent={12}
                        color='primary'
                        max={10}
                      >
                        <HiOutlineMail/>
                      </Badge>
                    </IconButton>
                </Box>
        </Box>
    );
};

const styles = {
    container: {
        p: 2,
        background: 'transparent',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
    },
    flexbox: {
        display: 'flex',
        alignItems: 'center',
    },
    
};
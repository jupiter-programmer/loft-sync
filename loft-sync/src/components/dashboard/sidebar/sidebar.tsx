import Box from '@mui/material/Box';
import { Brand } from './brand';
import { UserCard } from './user-card';
import { ItemsContainer } from './items-container';
export default function Sidebar () {
    const isExpanded = true;
    // const isExpanded = false;
    return (
        <Box sx={{
            ...styles.sidebar,
            width: isExpanded ? 270 : 65,
        }}>
            <Brand/>
            <ItemsContainer/>
            <UserCard/>
        </Box>
    );  
};
const styles = {
    sidebar: {
        // width: 90, // 270
        height: '100vh',
        background: '#000219',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 1s',
        overflow: 'hidden',
    },
};
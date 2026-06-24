import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import { sidebarItems } from './sidebar-items';
export const ItemsContainer = () => {
    return (
        <Box sx={styles.container}>
            { sidebarItems.map(({ href, label, icon: Icon }, i) => 
                <Link 
                    href={href} 
                    style={{ flexShrink: 0 }} 
                    key={i}
                >
                    <Button sx={styles.button}>
                        { <Icon 
                            size={20} 
                            style={{ flexShrink: 0 }}/> 
                        }
                        <Typography 
                            component='span' 
                            sx={{ 
                                flexShrink: 0, 
                                whiteSpace: 'nowrap',
                            }}
                        >
                            { label }
                        </Typography>
                    </Button>
                </Link>
            )}
        </Box>
    );
};
const styles = {
    container: { 
        px: 2, 
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: 2,
        }
    },
    button: {
        px: 2,
        height: 45,
        width: '100%',
        flexShrink: 0,
        justifyContent: 'flex-start',
        gap: 2,
        borderRadius: 2,
        color: 'var(--lightpink)',
        overflow: 'hidden',
    },
};
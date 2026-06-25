'use client';
import { useSidebar } from '@/hooks';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import { CustomLink } from '@/components/ui';
import { sidebarItems } from './sidebar-items';
export const ItemsContainer = () => {
    const { open } = useSidebar();
    return (
        <Box sx={styles.container}>
            { sidebarItems.map(({ href, label, icon: Icon }, i) => 
                <Tooltip 
                    title={label} 
                    key={i}
                >
                    <CustomLink 
                        href={href} 
                        className='sidebar-item'
                        style={{ flexShrink: 0 }} 
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
                                    opacity: open ? 1 : 0,
                                    transition: '0.5s',
                                }}
                            >
                                { label }
                            </Typography>
                        </Button>
                    </CustomLink>
                </Tooltip>
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
        color: 'var(--lightpink)',
        flexShrink: 0,
        justifyContent: 'flex-start',
        gap: 2,
        borderRadius: 2,
        overflow: 'hidden',
    },
};
import React from 'react';
import { Box, Button, Tooltip, Typography, Divider } from '@mui/material';
import { CustomLink } from '@/components/ui';
import { sidebarItems } from './sidebar-items';
export const ItemsContainer = ({
    onItemClick,
} : {
    onItemClick?: () => void;
}) => {
    return (
        <Box sx={styles.container}>
            { sidebarItems.map(({ href, label, icon: Icon, separator }, i) => 
                <React.Fragment key={i}>
                    { separator === 'divider' && 
                        <Divider sx={{ my: 2.5 }}/>
                    }
                    <Tooltip title={label}>
                        <CustomLink 
                            href={href} 
                            className='sidebar-item'
                            style={{ flexShrink: 0 }} 
                        >
                            <Button sx={styles.button} onClick={onItemClick}>
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
                        </CustomLink>
                    </Tooltip>
                </React.Fragment>
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
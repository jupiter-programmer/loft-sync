import React from 'react';
import { GoUnverified, GoVerified } from '@/assets/icons';
import { Box, Button } from '@mui/material';
export default function VerifyBadge () {
    const verified = true;
    return (
        <React.Fragment>
            { verified ? 
                <Box sx={{
                    ...styles.badge,
                    background: '#5300ee86',
                }}>
                    <GoVerified size={16}/>
                    Verified
                </Box> :
                <Button sx={{
                    ...styles.badge,
                    color: 'var(--lightpink)',
                    border: '1px solid var(--border)',
                }}>
                    <GoUnverified size={16}/>
                    Verify your account
                </Button>
            }
        </React.Fragment>
    );  
};
const styles = {
    badge: {
        py: 0.5,
        pl: 0.6,
        pr: 1.5,
        my: 0.5,
        fontSize: 12,
        fontWeight: 300,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        borderRadius: 4,
    },
};
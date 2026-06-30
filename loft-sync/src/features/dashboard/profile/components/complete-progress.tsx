import { Box, LinearProgress, Typography } from '@mui/material';
export default function CompleteProgress () {
    const value = 70;
    return (
        <Box sx={{ maxWidth: 360, pt: 3, mx: { xs: 'auto', md: 0 } }}>
            <LinearProgress
                variant='determinate'
                aria-labelledby='complete-profile'
                aria-valuetext='complete-profile'
                min={0}
                max={100}
                value={value}
                sx={styles.progress}
            />
            <Box sx={styles.complete}>
                <Typography sx={{ fontSize: 14 }}>
                    Complete your profile
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                    { value } %
                </Typography>
            </Box>
        </Box>
    );
};
const styles = {
    progress: { 
        height: 5, 
        borderRadius: 2, 
        '.MuiLinearProgress-bar': { 
            background: 'var(--gradient-secondary)', 
            borderRadius: 2,
        },
    },
    complete: { 
        py: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};
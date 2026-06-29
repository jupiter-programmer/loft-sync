import { Box, LinearProgress, Typography } from "@mui/material";

export default function CompleteProgress () {
    const value = 50;
    return (
        <Box sx={{ py: 2 }}>
            <LinearProgress
                variant='determinate'
                aria-labelledby='complete-profile'
                aria-valuetext='complete-profile'
                min={0}
                max={100}
                value={value}
                sx={{ borderRadius: 2 }}
            />
            <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 13,
            }}>
                <Typography>
                    Complete your profile
                </Typography>
                <Typography>
                    { value } %
                </Typography>
            </Box>
        </Box>
    );
};
import { Box, Typography } from '@mui/material';
export default function PageTitle ({
    title,
    subtitle,
} : {
    title: string;
    subtitle: string;
}) {
    return (
        <Box sx={{ mb: 5 }}>
            <Typography component='h3' sx={{
                fontSize: 30, 
                fontWeight: 500,
            }}>
                { title }
            </Typography>
            <Typography sx={{
                fontSize: 14,
            }}>
                { subtitle }
            </Typography>
        </Box>
    );  
};
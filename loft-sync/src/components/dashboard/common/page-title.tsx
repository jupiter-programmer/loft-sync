import { IconType } from 'react-icons';
import { Box, Typography, Stack } from '@mui/material';
export default function PageTitle ({
    icon,
    title,
    subtitle,
} : {
    icon?: IconType;
    title: string;
    subtitle: string;
}) {
    const Icon = icon;
    return (
        <Box sx={{ mb: 5 }}>
            <Stack 
                direction='row' 
                spacing={2}
                sx={{ alignItems: 'center' }}
            >
                { Icon && <Icon size={30}/> }
                <Typography component='h3' sx={{
                    fontSize: 30, 
                    fontWeight: 500,
                }}>
                    { title }
                </Typography>
            </Stack>
            <Typography sx={{
                fontSize: 14,
            }}>
                { subtitle }
            </Typography>
        </Box>
    );  
};
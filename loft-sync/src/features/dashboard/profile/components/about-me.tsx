// background: '',

import { Box, Stack } from "@mui/material";
import { FiUser } from "@/assets/icons";

// color: '#dec3ff',
export default function AboutMe () {
    return (
        <Box sx={{
            flex: 1,
            background: 'var(--light)',
            border: '1px solid var(--border)',
            borderRadius: 4,
        }}>
            <Stack direction='row' spacing={2} sx={{
                py: 2,
                px: 2.5,
                alignItems: 'center',
                gap: 1,
                fontWeight: 500,
            }}>
                <FiUser size={25} color="#b41cdd"/>
                About Me
            </Stack>
        </Box>
    );
};
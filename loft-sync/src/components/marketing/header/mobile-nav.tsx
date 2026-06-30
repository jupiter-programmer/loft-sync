import { Box, IconButton } from "@mui/material";
import { RiMenu3Fill } from "@/assets/icons";

export default function MobileNav () {
    return (
        <Box sx={{ display: { xs: 'inherit', md: 'none' } }}>
            
            <IconButton>
                <RiMenu3Fill/>
            </IconButton>
        </Box>
    );
};
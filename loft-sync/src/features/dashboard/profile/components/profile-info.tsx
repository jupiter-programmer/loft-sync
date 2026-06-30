import { Box, IconButton, Stack } from "@mui/material";
import { FiUser, VscEdit } from "@/assets/icons";

export default function ProfileInfo () {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.flexbox}>
                <Stack direction='row' spacing={2} sx={styles.header}>
                    <FiUser size={20} style={styles.icon}/>
                    Profile Information
                </Stack>
                <IconButton sx={styles.edit}>
                    <VscEdit size={20}/>
                </IconButton>
            </Box>
        </Box>
    );
};
const styles = {
    container: {
        p: 2,
        background: `
            linear-gradient(
                -250deg,
                #5400ee73 0%,
                #5400ee2e 18%,
                #5400ee0f 35%,
                var(--light) 65%
            )`,
        border: '1px solid var(--border)',
        borderRadius: 4,
    },
    flexbox: { 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
    },
    header: {
        p: 1,
        gap: 1.5,
        fontSize: 15,
        fontWeight: 500,
    },
    edit: { 
        border: '1px solid var(--border)', 
    },
    icon: {
        filter: `
            drop-shadow(0 0 2px #b41cdde6)
            drop-shadow(0 0 6px #b41cdd8c)
            drop-shadow(0 0 12px #b41cdd4d)
        `,
    },
};
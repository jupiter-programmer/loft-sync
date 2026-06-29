import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { UserAvatar } from "@/components/ui";
import VerifyBadge from "./verify-badge";
import CompleteProgress from "./complete-progress";
import { HiOutlineMail, IoLocationOutline, LuPhone, PiBird } from '@/assets/icons';
import { Sejin } from '@/assets/images';
export default function UserProfileCard () {
    const user = {
        email: 'mern.sejin@gmail.com',
        address: 'Bangladesh',
        phone: '+8801234567890',
    };
    const userInfo = [
        user.address,
        user.email,
        user.phone,
    ];
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3.5 }}>
                <Box sx={{
                    ...styles.card,
                    textAlign: 'center',
                }}>
                    <Box sx={{ pb: 1 }}>
                        <UserAvatar size={100} sx={{ mx: 'auto', mb: 1 }}/>
                        <VerifyBadge/>
                        <Typography sx={{
                            fontSize: 20,
                            fontWeight: 500,
                            background: 'var(--gradient-primary)',
                        }} className='text-gradient'>
                            Sejin Ahmed
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                            Loft Owner
                        </Typography>
                    </Box>
                    <Box sx={{ pt: 1 }}>
                        { userInfo.map((info, i) => 
                            <Typography sx={{ fontSize: 13, mt: 0.3 }} key={i}>
                                { info }
                            </Typography>
                        )}
                    </Box>
                    <CompleteProgress/>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 8.5 }}>
                <Box sx={styles.card}>
                    a
                </Box>
            </Grid>
        </Grid>
    );
};
const styles = {
    card: {
        p: 4,
        background: '#12023abd',
        backdropFilter: 'blur(5px)',
        border: '1px solid var(--border)',
        borderRadius: 4,
    },
    userInfo: { 
        color: '#dec3ff',
        fontSize: 13, 
        mt: 1, 
        'svg': {
            fontSize: 16,
            marginRight: 1, 
            marginBottom: -0.5,
        },
    },
};
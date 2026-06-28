import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Sejin } from '@/assets/images'
import { HiOutlineMail, IoLocationOutline, LuPhone, PiBird, RiVerifiedBadgeFill } from '@/assets/icons'
export default function UserProfileCard () {
    const user = {
        email: 'mern.sejin@gmail.com',
        address: 'Bangladesh',
        phone: '+8801234567890',
    };
    const userInfo = [
        { icon: IoLocationOutline, value: user.address },
        { icon: HiOutlineMail, value: user.email },
        { icon: LuPhone, value: user.phone },
    ];
    return (
        <Grid container sx={styles.card}>
            <Grid size={{ xs: 12, lg: 5 }}>
                <Box sx={{ 
                    display: { xs: 'inherit', md: 'flex' },
                    textAlign: { xs: 'center', md: 'start' },
                    gap: 2,
                }}>
                    <Avatar src={Sejin.src} sx={styles.avatar}>
                        S
                    </Avatar>
                    <Box>
                        <Typography sx={{
                            fontSize: 25,
                            fontWeight: 500,
                            background: 'var(--gradient-primary)',
                        }} className='text-gradient'>
                            Sejin Ahmed
                            <RiVerifiedBadgeFill 
                                size={20} 
                                color='#ffa205'
                                style={{ marginBottom: -2, marginLeft: 4 }}
                            />
                        </Typography>
                        <Typography sx={{ fontSize: 13 }}>
                            <PiBird size={17} style={{ marginBottom: -5, marginRight: 5 }}/>
                            Loft Owner
                        </Typography>
                        <Box sx={{ pt: 2 }}>
                            { userInfo.map(({ value, icon: Icon }, i) => 
                                <Typography sx={styles.userInfo} key={i}>
                                    <Icon/>
                                    { value }
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 7 }}>
                <p>f</p>
                <p>f</p>
                <p>f</p>
            </Grid>
        </Grid>
    );
};
const styles = {
    card: {
        p: { xs: 2, md: 4 },
        background: '#12023abd',
        backdropFilter: 'blur(5px)',
        border: '1px solid var(--border)',
        borderRadius: 4,
    },
    avatar: { 
        height: { xs: 80, md: 100 }, 
        width: { xs: 80, md: 100 }, 
        fontSize: 50,
        background: 'var(--gradient-primary)', 
        mx: { xs: 'auto', md: 0 },
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
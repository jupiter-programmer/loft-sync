import { Box, Stack, Typography } from '@mui/material';
import { UserAvatar } from '@/components/ui';
import VerifyBadge from './verify-badge';
import { 
    FaRegCalendarAlt, 
    HiOutlineMail, 
    IoLocationOutline, 
    LuPhone, 
    RiHome9Line,
} from '@/assets/icons';
import CompleteProgress from './complete-progress';
export default function UserProfileCard () {
    const userInfo = [
        { icon: RiHome9Line, value: 'Sejin Loft' },
        { icon: HiOutlineMail, value: 'mern.sejin@gmail.com' },
        { icon: LuPhone, value: '+8801234567890' },
        { icon: IoLocationOutline, value: 'Bangladesh' },
    ];
    return (
        <Box sx={styles.container}> 
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                sx={styles.flexbox}
            >
                <Box>
                    <UserAvatar size={110} sx={styles.avatar}/>
                    <Typography sx={styles.userRole}>
                        <RiHome9Line size={16}/>
                        Loft Owner
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={styles.userName} className='text-gradient'>
                        Sejin Ahmed
                    </Typography>
                    <VerifyBadge/>
                    { userInfo.map(({ icon: Icon, value }, i) => 
                        <Typography sx={styles.userInfo} key={i}>
                            <Icon size={16}/>
                            { value }
                        </Typography>
                    )}
                </Box>
            </Stack>
            <CompleteProgress/>
            <Typography sx={{ ...styles.userInfo, mt: 2 }}>
                <FaRegCalendarAlt size={16}/>
                Member since January 01, 2026
            </Typography>
        </Box>
    );
};
const styles = {
    container: {
        p: 3,
        textAlign: { xs: 'center', md: 'start' },
        background: {
            xs: `
                linear-gradient(to bottom, var(--light), transparent) padding-box,
                linear-gradient(to bottom, var(--border), transparent) border-box
            `,
            md: `
                linear-gradient(to right, var(--light), transparent) padding-box,
                linear-gradient(to right, var(--border), transparent) border-box
            `,
        },
        border: '2px solid transparent',
        borderRadius: 3,
    },
    flexbox: {
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'normal' },
    },
    avatar: { 
        mx: 'auto', 
        borderRadius: { xs: 'auto', md: 4 },
    },
    userRole: {
        px: 1,
        py: 0.3,
        mt: 2,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 500,
        color: '#e855de',
        background: '#5300ee86',
        border: '1px solid var(--border)',
        borderRadius: 4,
    },
    userName: {
        fontSize: 20,
        fontWeight: 500,
        background: 'var(--gradient-primary)',
    },
    userInfo: {
        fontSize: 13,
        lineHeight: 1.8,
        'svg': {
            marginRight: 1,
            marginBottom: -0.5,
        },
    },
};
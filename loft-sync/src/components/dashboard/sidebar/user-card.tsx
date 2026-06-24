import Link from 'next/link';
import { Avatar, Box, ButtonBase, Typography } from '@mui/material';
import { FaArrowRightToBracket } from '@/assets/icons';
import { Sejin } from '@/assets/images';
export const UserCard = () => {
    return (
        <Box sx={styles.parent}>
            <Link 
                href='/profile' 
                style={{ flexShrink: 0, width: '100%' }} 
            >
                <ButtonBase sx={styles.container}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                    }}>
                        <Avatar src={Sejin.src} sx={styles.avatar}>
                            S
                        </Avatar>
                        <Box>
                            <Typography 
                                sx={styles.name} 
                                className='text-gradient'
                            >
                                Sejin Ahmed
                            </Typography>
                            <Typography sx={{
                                fontSize: 12,
                            }}>
                                Admin
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.icon}>
                        <FaArrowRightToBracket/>
                    </Box>
                </ButtonBase>
            </Link>
        </Box>
    );
};
const styles = {
    parent: {
        py: 2,
        px: 1,
    },
    container: {
        p: 1.5,
        gap: 8,
        background: `
            linear-gradient(320deg, #b41cdd66 0%, #b41cdd26 25%, transparent 65%)
        `,
        textAlign: 'start',
        border: '1px solid var(--border)',
        borderRadius: 2,
        overflow: 'hidden',
        transition: '1s',
    },
    avatar: { 
        background: 'var(--gradient-secondary)',
    },
    name: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.1,
        background: 'var(--gradient-secondary)',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    icon: { 
        textAlign: 'end',
    },
};
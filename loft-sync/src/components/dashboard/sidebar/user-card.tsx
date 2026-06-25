import Link from 'next/link';
import { Avatar, Box, ButtonBase, Tooltip, Typography } from '@mui/material';
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
                        <Tooltip title='Sejin Ahmed'>
                            <Avatar src={Sejin.src} sx={styles.avatar}>
                                S
                            </Avatar>
                        </Tooltip>
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
                                Loft Owner
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
        gap: 9,
        background: `
            linear-gradient(to right, #170249e7, #420177e1, #170249e7)
        `,
        textAlign: 'start',
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
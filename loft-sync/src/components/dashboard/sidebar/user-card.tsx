import Link from 'next/link';
import { Avatar, Box, ButtonBase, Tooltip, Typography } from '@mui/material';
import { FaArrowRightToBracket } from '@/assets/icons';
import { Sejin } from '@/assets/images';
import { UserAvatar } from '@/components/ui';
export const UserCard = ({
    onClick,
} : {
    onClick?: () => void;
}) => {
    return (
        <Box sx={styles.parent}>
            <Link 
                href='/profile' 
                style={{ width: '100%' }} 
            >
                <ButtonBase sx={styles.container} onClick={onClick}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                    }}>
                        <Tooltip title='Sejin Ahmed'>
                            <UserAvatar/>
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
        width: { xs: '100%', sm: 'auto' },
        gap: { sm: 9 },
        justifyContent: { xs: 'space-between', md: 'normal' },
        background: `
            linear-gradient(to right, #170249e7, #420177e1, #170249e7)
        `,
        textAlign: 'start',
        borderRadius: 2,
        overflow: 'hidden',
        transition: '1s',
    },
    name: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.1,
        background: 'var(--gradient-primary)',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    icon: { 
        textAlign: 'end',
    },
};
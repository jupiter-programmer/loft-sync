import Avatar from '@mui/material/Avatar';
import { Sejin } from '@/assets/images';
export default function UserAvatar ({
    size = 38,
    sx,
} : {
    size?: number | object;
    sx?: object;
}) {
    const name = 'Sejin Ahmed';
    return (
        <Avatar src={Sejin.src} sx={{
            ...sx,
            ...styles.avatar,
            height: size,
            width: size,
        }} alt={name}>
            { name?.[0] }
        </Avatar>
    );
};
const styles = {
    avatar: { 
        fontSize: 50,
        background: 'var(--gradient-primary)', 
    },
};
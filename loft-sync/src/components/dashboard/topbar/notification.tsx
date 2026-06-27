import Link from 'next/link';
import { Badge, IconButton } from '@mui/material';
import { GoBell } from '@/assets/icons';
export default function Notification () {
    return (
        <Link href='/notification'>
            <IconButton aria-label='notifications'>
                <Badge
                  badgeContent={11}
                  color='primary'
                  max={10}
                >
                    <GoBell/>
                </Badge>
            </IconButton>
        </Link>
    );
};
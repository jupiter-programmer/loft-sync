import Link from 'next/link';
import { Badge, IconButton } from '@mui/material';
import { HiOutlineMail } from '@/assets/icons';
export default function Message () {
    return (
        <Link href='/message'>
            <IconButton aria-label='messages'>
                <Badge
                  badgeContent={11}
                  color='primary'
                  max={10}
                >
                    <HiOutlineMail/>
                </Badge>
            </IconButton>
        </Link>
    );
};
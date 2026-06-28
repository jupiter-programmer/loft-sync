import { Box } from '@mui/material';
import { PageBanner, PageTitle } from '@/components/dashboard';
import { UserProfileCard } from './components';
import { FiUser } from '@/assets/icons';

export default function ProfilePage () {
    return (
        <Box sx={{ position: 'relative' }}>
            <PageBanner/>
            <Box sx={{ px: 2, pt: 5 }}>
                <PageTitle
                    icon={FiUser}
                    title='Profile'
                    subtitle='Manage your personal information and account preferences'
                />
                <UserProfileCard/>
            </Box>
        </Box>
    );
};
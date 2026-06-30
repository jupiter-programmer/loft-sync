import ProfileRoot from './root';
import Box from '@mui/material/Box';
import { PageBanner, PageTitle } from '@/components/dashboard';
import { FiUser } from '@/assets/icons';
export default function ProfilePage () {
    return (
        <Box sx={{ position: 'relative' }}>
            <PageBanner/>
            <Box sx={{ px: 2, pt: 5 }}>
                <PageTitle
                    icon={FiUser}
                    title='My Profile'
                    subtitle='Manage your personal information and account preferences.'
                />
                <ProfileRoot/>
            </Box>
        </Box>
    );
};
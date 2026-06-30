import { Metadata } from 'next';
import { ProfilePage } from '@/features/dashboard';
export const metadata: Metadata = {
  title: 'LoftSync | Profile',
};
export default function Profile () {
    return <ProfilePage/>;  
};
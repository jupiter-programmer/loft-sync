import { Metadata } from 'next';
import { ProfilePage } from '@/features';
export const metadata: Metadata = {
  title: 'LoftSync | Profile',
};
export default function Profile () {
    return <ProfilePage/>;  
};
import React from 'react';
import { UserProfileCard } from './components';
import { Grid } from '@mui/material';
import { ProfileInfo } from './components';
export default function ProfileRoot () {
    return (
        <React.Fragment>
            <UserProfileCard/>
            <Grid container spacing={3} sx={{ py: 3 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ProfileInfo/>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ProfileInfo/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
import React from 'react';
import { Box } from '@mui/system';
import { AccountHeader } from 'components/Cabinet/AccountHeader';
import { ContentPage } from 'components/Cabinet/ContentPage';

export const Account: React.FC = () => (
    <>
        <AccountHeader />
        <Box sx={{ mt: '70px' }}>
            <ContentPage />
        </Box>
    </>
);

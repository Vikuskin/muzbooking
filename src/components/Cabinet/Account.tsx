import { Box } from '@mui/system';
import { AccountHeader } from './AccountHeader'
import { ContentPage } from './ContentPage';

export const Account: React.FC = () => {
  return (
    <>
        <AccountHeader/>
        <Box sx={{
            marginTop: '70px'
        }}>
            <ContentPage/>
        </Box>
    </>
  );
};
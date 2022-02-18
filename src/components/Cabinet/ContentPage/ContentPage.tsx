import * as React from 'react';
import { Box, Container } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FlexDiv, AccountTitleH1 } from 'style/otherStyles';
import { ContentPagePlatform } from 'components/Cabinet/ContentPage/ContentPagePlatform';
import { ContentPageMainInfo } from 'components/Cabinet/ContentPage/ContentPageMainInfo';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { useEffect } from 'react';

export const ContentPage = () => {
    const [showPlatform, setShowPlatform] = React.useState<boolean>(false);
    const {data, loading} = useTypedSelector((state) => state.account);
    console.log(data);

    const { fetchAccountContent } = useActions();

    useEffect(() => {
        if (localStorage.token) {
            fetchAccountContent(localStorage.token);
        } else {
            alert('Войдите в аккаунт');
            setTimeout(() => {
                window.location.replace('http://localhost:3000/login');
            }, 1000);
        }
    }, []);

    return (
        <Container maxWidth="xl" sx={{ p: '30px', textAlign: 'left' }}>
            <FlexDiv sx={{ alignItems: 'flex-start' }}>
                <Box sx={{ width: '40%' }}>
                    <AccountTitleH1>Основная информация</AccountTitleH1>
                    {loading ? 
                        <>Загрузка...</> : 
                        <ContentPageMainInfo data={data}/>
                    }
                    
                </Box>
                <Box sx={{ width: '50%' }}>
                    <AccountTitleH1>Площадки</AccountTitleH1>
                    {showPlatform ? (
                        <ContentPagePlatform />
                    ) : (
                        <AddCircleIcon
                            sx={{ color: '#f89623', fontSize: '60px' }}
                            onClick={() => setShowPlatform(true)}
                        />
                    )}
                </Box>
            </FlexDiv>
        </Container>
    );
};

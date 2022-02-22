/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import {
    Box,
    Container,
    ListItemText,
    ListItemIcon,
    Modal,
    styled,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import {
    FlexDiv,
    AccountTitleH1,
    ContentPageListItem,
} from 'style/otherStyles';
import {
    ContentPagePlatform,
    PlatformProps,
} from 'components/Cabinet/ContentPage/ContentPagePlatform';
import { ContentPageMainInfo } from 'components/Cabinet/ContentPage/ContentPageMainInfo';
import {
    dbServicesPlace,
    dbComfortPlace,
} from 'components/databases/dbCheckboxs';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';

const style = {
    position: 'absolute' as 'absolute',
    top: '10%',
    bottom: '10%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
};

const OrangeCircleIcon = styled(AddCircleIcon)({
    color: '#f89623',
    fontSize: '60px',
    textAlign: 'center',
    width: '100%',
});

export const ContentPage = () => {
    const [showPlatform, setShowPlatform] = React.useState<boolean>(false);
    const { data, loading } = useTypedSelector((state) => state.account);

    const { fetchAccountContent, fetchAccountPlatformDelete } = useActions();

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
    const [modal, setModal] = React.useState<PlatformProps>({
        namePlatform: '',
        square: 0,
        rider: '',
        products: [],
        services: [],
        comfort: [],
        idPlatform: '',
    });
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <Container maxWidth="xl" sx={{ p: '30px', textAlign: 'left' }}>
            <FlexDiv sx={{ alignItems: 'flex-start' }}>
                <Box sx={{ width: '40%' }}>
                    <AccountTitleH1>Основная информация</AccountTitleH1>
                    {loading ? (
                        <>Загрузка...</>
                    ) : data.place ? (
                        <ContentPageMainInfo
                            sphera={data.place.sphera}
                            nameCompany={data.place.nameCompany}
                            city={data.place.city}
                            address={data.place.address}
                            phone={data.place.phone}
                            subway={data.place.subway}
                            email={data.place.email}
                            description={data.place.description}
                        />
                    ) : (
                        <></>
                    )}
                </Box>
                <Box sx={{ width: '50%' }}>
                    <AccountTitleH1>Площадки</AccountTitleH1>
                    {loading ? (
                        <>Загрузка...</>
                    ) : data.platform ? (
                        showPlatform ? (
                            <></>
                        ) : (
                            data.platform.map((item: any, i: number) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <ContentPageListItem key={i}>
                                    <ListItemText>
                                        {item.namePlatform}
                                    </ListItemText>
                                    <ListItemIcon>
                                        <EditIcon
                                            sx={{
                                                mr: '10px',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => {
                                                setOpen(true);
                                                setModal(item);
                                            }}
                                        />

                                        <RemoveCircleIcon
                                            sx={{ cursor: 'pointer' }}
                                            onClick={async () => {
                                                const res =
                                                    await fetchAccountPlatformDelete(
                                                        localStorage.token,
                                                        item._id
                                                    );
                                                alert(
                                                    'Площадка успешно удалена'
                                                );
                                                fetchAccountContent(
                                                    localStorage.token
                                                );
                                            }}
                                        />
                                    </ListItemIcon>
                                </ContentPageListItem>
                            ))
                        )
                    ) : (
                        <></>
                    )}
                    {showPlatform ? (
                        <ContentPagePlatform
                            namePlatform=""
                            square={0}
                            rider=""
                            products={[]}
                            services={dbServicesPlace}
                            comfort={dbComfortPlace}
                            idPlatform=""
                        />
                    ) : (
                        <OrangeCircleIcon
                            onClick={() => setShowPlatform(true)}
                        />
                    )}
                </Box>
            </FlexDiv>
            {modal ? (
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ overflow: 'scroll' }}
                >
                    <Box sx={style}>
                        <ContentPagePlatform
                            namePlatform={modal.namePlatform}
                            square={modal.square}
                            rider={modal.rider}
                            products={modal.products}
                            services={modal.services}
                            comfort={modal.comfort}
                            idPlatform={modal.idPlatform}
                        />
                    </Box>
                </Modal>
            ) : (
                <></>
            )}
        </Container>
    );
};

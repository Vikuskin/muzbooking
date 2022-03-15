import React, { useEffect } from 'react';
import {
    Box,
    Container,
    ListItemText,
    ListItemIcon,
    Modal,
    styled,
} from '@mui/material';
import { AddCircle, RemoveCircle, Edit } from '@mui/icons-material';
import {
    AccountTitleH1,
    ContentPageListItem,
    styleModal,
    ButtonPrimary,
} from 'style/otherStyles';
import { AccountHeader } from 'components/Cabinet/AccountHeader';
import { ContentPagePlatform } from 'components/Cabinet/ContentPage/ContentPagePlatform';
import { ContentPageMainInfo } from 'components/Cabinet/ContentPage/ContentPageMainInfo';
import {
    dbServicesPlace,
    dbComfortPlace,
} from 'components/databases/dbCheckboxs';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { ContentPagePlatformProps } from 'types/Cabinet';

const OrangeCircleIcon = styled(AddCircle)({
    color: '#f89623',
    fontSize: '60px',
    textAlign: 'center',
    width: '100%',
});

const Wrapper = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
});

const MainInfo = styled(Box)({
    width: '45%',
    minWidth: '300px',
    marginRight: '15px',
    marginBottom: '30px',
    padding: '30px',
    '@media (max-width: 900px)': {
        width: '100%',
        marginRight: 0,
    },
    '@media (max-width: 600px)': {
        padding: 0,
    },
});

const Platforms = styled(Box)({
    width: '45%',
    minWidth: '300px',
    padding: '30px',
    '@media (max-width: 900px)': {
        width: '100%',
        marginRight: 0,
    },
    '@media (max-width: 600px)': {
        padding: 0,
    },
});

export const ContentPage: React.FC = () => {
    const [showPlatform, setShowPlatform] = React.useState<boolean>(false);
    const { data, loading } = useTypedSelector((state) => state.data);
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
    const [modal, setModal] = React.useState<ContentPagePlatformProps>({
        namePlatform: '',
        square: '0',
        rider: '',
        products: [],
        services: [],
        comfort: [],
        _id: '',
        images: [],
    });
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <>
            <AccountHeader />
            <Container
                maxWidth="xl"
                sx={{ p: '30px', textAlign: 'left', pt: '100px' }}
            >
                <Wrapper>
                    <MainInfo>
                        <AccountTitleH1>Основная информация</AccountTitleH1>
                        {loading ? (
                            <>Загрузка...</>
                        ) : (
                            data.place && (
                                <ContentPageMainInfo
                                    sphera={data.place.sphera}
                                    nameCompany={data.place.nameCompany}
                                    city={data.place.city}
                                    address={data.place.address}
                                    phone={data.place.phone}
                                    subway={data.place.subway}
                                    email={data.place.email}
                                    description={data.place.description}
                                    timetable={data.place.timetable}
                                    price={data.place.price}
                                />
                            )
                        )}
                    </MainInfo>
                    <Platforms>
                        <AccountTitleH1>Площадки</AccountTitleH1>
                        {loading ? (
                            <>Загрузка...</>
                        ) : (
                            data.platform &&
                            !showPlatform &&
                            data.platform.map(
                                (item: ContentPagePlatformProps) => (
                                    <ContentPageListItem
                                        key={item._id}
                                        sx={{
                                            backgroundImage: `linear-gradient(to right, rgba(55, 44, 64, .60) 0%, rgba(55, 44, 64, .60) 100%), url(http://localhost:5000/${item.images[0].path})`,
                                            minHeight: '200px',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <ListItemText
                                            sx={{
                                                color: 'white',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {item.namePlatform}
                                        </ListItemText>
                                        <ListItemIcon>
                                            <Edit
                                                sx={{
                                                    mr: '10px',
                                                    cursor: 'pointer',
                                                    color: 'white',
                                                }}
                                                onClick={() => {
                                                    setOpen(true);
                                                    setModal(item);
                                                }}
                                            />

                                            <RemoveCircle
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'white',
                                                }}
                                                onClick={() => {
                                                    fetchAccountPlatformDelete(
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
                                )
                            )
                        )}
                        {showPlatform ? (
                            <>
                                <ContentPagePlatform
                                    namePlatform=""
                                    square="0"
                                    rider=""
                                    products={[]}
                                    services={dbServicesPlace}
                                    comfort={dbComfortPlace}
                                    _id=""
                                    images={[]}
                                />
                                <ButtonPrimary
                                    onClick={() => setShowPlatform(false)}
                                    sx={{
                                        minWidth: '138px',
                                        p: '10px 25px !important',
                                    }}
                                >
                                    Назад
                                </ButtonPrimary>
                            </>
                        ) : (
                            <OrangeCircleIcon
                                onClick={() => setShowPlatform(true)}
                            />
                        )}
                    </Platforms>
                </Wrapper>
                {modal && (
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{ overflow: 'scroll' }}
                    >
                        <Box sx={styleModal}>
                            <ContentPagePlatform
                                namePlatform={modal.namePlatform}
                                square={modal.square}
                                rider={modal.rider}
                                products={modal.products}
                                services={modal.services}
                                comfort={modal.comfort}
                                _id={modal._id}
                                images={modal.images}
                            />
                        </Box>
                    </Modal>
                )}
            </Container>
        </>
    );
};

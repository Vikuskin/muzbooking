import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    ListItemText,
    ListItemIcon,
    Modal,
} from '@mui/material';
import { RemoveCircle, Edit } from '@mui/icons-material';
import {
    ContentPageListItem,
    styleModal,
    ButtonPrimary,
} from 'style/otherStyles';
import {
    Wrapper,
    MainInfo,
    AccountTitleH1,
    Platforms,
    OrangeCircleIcon,
} from 'style/cabinet/contentPage/contentPage';
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
import { path } from 'enum';

export const ContentPage: React.FC = () => {
    const [showPlatform, setShowPlatform] = React.useState<boolean>(false);
    const { data, loading } = useTypedSelector((state) => state.data);
    const { fetchAccountContent, fetchAccountPlatformDelete } = useActions();

    const FetchAccountContent = (params: string) => {
        const prevParams = useRef(params);

        useEffect(() => {
            if (prevParams.current === params) {
                if (localStorage.token) {
                    fetchAccountContent(localStorage.token);
                } else {
                    alert('Войдите в аккаунт');
                    setTimeout(() => {
                        window.location.replace(path.PUBLIC_URL + path.Login);
                    }, 1000);
                }
                prevParams.current = params;
            }
        }, [params]);
    };
    FetchAccountContent(localStorage.token);

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
    const { t } = useTranslation();

    return (
        <>
            <AccountHeader />
            <Container
                maxWidth='xl'
                sx={{ p: '30px', textAlign: 'left', pt: '100px' }}
            >
                <Wrapper>
                    <MainInfo>
                        <AccountTitleH1>
                            {t('cabinet.contentPage.title1')}
                        </AccountTitleH1>
                        {loading ? (
                            <>{t('loading')}</>
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
                        <AccountTitleH1>
                            {t('cabinet.contentPage.title2')}
                        </AccountTitleH1>
                        {loading ? (
                            <>{t('loading')}</>
                        ) : (
                            data.platform &&
                            !showPlatform &&
                            data.platform.map(
                                (item: ContentPagePlatformProps) => (
                                    <ContentPageListItem
                                        key={item._id}
                                        sx={{
                                            backgroundImage: `linear-gradient(to right, rgba(55, 44, 64, .60) 0%, rgba(55, 44, 64, .60) 100%), url(${path.SERVER_URL}/${item.images[0].path})`,
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
                                                        t(
                                                            'cabinet.contentPage.deleted'
                                                        )
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
                                    namePlatform=''
                                    square='0'
                                    rider=''
                                    products={[]}
                                    services={dbServicesPlace}
                                    comfort={dbComfortPlace}
                                    _id=''
                                    images={[]}
                                />
                                <ButtonPrimary
                                    onClick={() => setShowPlatform(false)}
                                    sx={{
                                        minWidth: '138px',
                                        p: '10px 25px !important',
                                    }}
                                >
                                    {t('cabinet.contentPage.back')}
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
                        aria-labelledby='modal-modal-title'
                        aria-describedby='modal-modal-description'
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

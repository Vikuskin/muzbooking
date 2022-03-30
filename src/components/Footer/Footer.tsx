import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Container,
    Box,
    List,
    ListItem,
    ListItemText,
    Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import vkontakte from 'image/Footer/vkontakte.png';
import facebook from 'image/Footer/facebook.png';
import youtube from 'image/Footer/youtube.png';
import instagram from 'image/Footer/instagram.png';
import { useActions } from 'hooks/useActions';
import { FlexDiv } from 'style/otherStyles';
import { path } from 'enum';

export const Footer: React.FC = () => {
    const { chooseServices } = useActions();
    const { t } = useTranslation();

    return (
        <Container
            maxWidth={false}
            sx={{
                backgroundColor: '#ccc',
                borderTop: '1px dashed black',
                p: { xs: 0 },
            }}
        >
            <Container maxWidth='xl'>
                <Box
                    sx={{ p: '40px 20px', textAlign: 'left', fontSize: '20px' }}
                >
                    <FlexDiv
                        sx={{
                            flexWrap: 'wrap',
                        }}
                    >
                        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            MUSBOOKING
                            <br />
                            <span style={{ fontWeight: 'normal' }}>
                                © 2016 — 2022
                            </span>
                        </p>

                        <Box sx={{ ml: { xs: '-10px' } }}>
                            <a href='https://vk.com/?ysclid=l1dab0rysp'>
                                <img
                                    src={vkontakte}
                                    style={{
                                        width: '40px',
                                        marginLeft: '10px',
                                    }}
                                    alt='Vkontakte'
                                />
                            </a>
                            <a href='https://www.instagram.com'>
                                <img
                                    src={instagram}
                                    style={{
                                        width: '40px',
                                        marginLeft: '10px',
                                    }}
                                    alt='Instagram'
                                />
                            </a>
                            <a href='https://www.youtube.com'>
                                <img
                                    src={youtube}
                                    style={{
                                        width: '40px',
                                        marginLeft: '10px',
                                    }}
                                    alt='Youtube'
                                />
                            </a>
                            <a href='https://www.facebook.com'>
                                <img
                                    src={facebook}
                                    style={{
                                        width: '40px',
                                        marginLeft: '10px',
                                    }}
                                    alt='Facebook'
                                />
                            </a>
                        </Box>
                    </FlexDiv>

                    <hr />
                    <Box sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mr: '-24px',
                                flexDirection: { xs: 'column', sm: 'row' },
                            }}
                        >
                            <Grid item>
                                <List sx={{ pl: 0 }}>
                                    <Link to={path.Search}>
                                        <ListItem
                                            sx={{ pt: 0, pb: 0, pl: 0 }}
                                            onClick={() => {
                                                chooseServices('DANCE');
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <ListItemText
                                                sx={{ m: 0 }}
                                                primary={t('sphera.dance')}
                                            />
                                        </ListItem>
                                    </Link>
                                    <Link to={path.Search}>
                                        <ListItem
                                            sx={{ pt: 0, pb: 0, pl: 0 }}
                                            onClick={() => {
                                                chooseServices('RECORD');
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <ListItemText
                                                sx={{ m: 0 }}
                                                primary={t('sphera.record')}
                                            />
                                        </ListItem>
                                    </Link>
                                    <Link to={path.Search}>
                                        <ListItem
                                            sx={{ pt: 0, pb: 0, pl: 0 }}
                                            onClick={() => {
                                                chooseServices('PHOTO');
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <ListItemText
                                                sx={{ m: 0 }}
                                                primary={t('sphera.photo')}
                                            />
                                        </ListItem>
                                    </Link>
                                    <Link to={path.Search}>
                                        <ListItem
                                            sx={{ pt: 0, pb: 0, pl: 0 }}
                                            onClick={() => {
                                                chooseServices('TEACHING');
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <ListItemText
                                                sx={{ m: 0 }}
                                                primary={t('sphera.teaching')}
                                            />
                                        </ListItem>
                                    </Link>
                                </List>
                            </Grid>
                        </Grid>
                    </Box>
                    <hr />

                    <Box sx={{ fontSize: '15px', marginTop: '10px' }}>
                        <p>{t('footer.address')}</p>
                        <p>
                            <a href='mailto:feedback@musbooking.com'>
                                feedback@musbooking.com
                            </a>
                        </p>
                        <a href='tel: +7 (925) 594-77-62'>+7 (925) 594-77-62</a>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
};

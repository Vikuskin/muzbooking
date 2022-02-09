import { Box } from "@mui/system"
import React from "react"
import vkontakte from '../../image/Footer/vkontakte.png'
import facebook from '../../image/Footer/facebook.png'
import youtube from '../../image/Footer/youtube.png'
import instagram from '../../image/Footer/instagram.png'
import { Container } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export const Footer: React.FC = () => {

    return (
        <Container maxWidth={false} sx={{ backgroundColor: '#ccc', borderTop: '1px dashed black', p: { xs: 0 } }}>
        <Container maxWidth="xl">
            <Box sx={{ p: '40px 20px', textAlign: 'left', fontSize: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>MUSBOOKING 
                    <span style={{ fontWeight: 'normal' }}> <br/>© 2016 — 2022</span></p>
                    <Box sx={{ ml: { xs: '-10px' } }}>
                        <a href='#'><img src={vkontakte} style={{ width: '40px', marginLeft: '10px' }} alt='Vkontakte'/></a>
                        <a href='#'><img src={instagram} style={{ width: '40px', marginLeft: '10px' }} alt='Instagram'/></a>
                        <a href='#'><img src={youtube} style={{ width: '40px', marginLeft: '10px' }} alt='Youtube'/></a>
                        <a href='#'><img src={facebook} style={{ width: '40px', marginLeft: '10px' }} alt='Facebook'/></a>
                    </Box>
                </Box>

                <hr/>
                <Box sx={{ flexGrow: 1, justifyContent: 'space-between'}}>
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-between', mr: '-24px' }}>
                    <Grid item>
                        <List sx={{ pl: 0 }}>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
                                <a><ListItemText sx={{ m: 0 }} primary="Конфиденциальность"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Правила и условия"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Реквизиты компании"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Часто задаваемые вопросы"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="О компании"/></a>
                            </ListItem>
                        </List>
                    </Grid>
                    

                    <Grid item>
                        <List sx={{ pl: 0 }}>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
                                <a><ListItemText sx={{ m: 0 }} primary="Репетиционные базы"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Музыкальные классы"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Танцевальные залы"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Студии звукозаписи"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Фотостудии"/></a>
                            </ListItem>
                            <ListItem sx={{ pt: 0, pb: 0, pl: 0  }}>
                                <a><ListItemText sx={{ m: 0 }}  primary="Площадки для мероприятий "/></a>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item>
                        <List sx={{ pl: 0, pr: 0 }}>
                            <ListItem sx={{ p: 0 }}>
                                <a><ListItemText sx={{ m: 0, p: 0 }} primary="Обучение"/></a>
                            </ListItem>
                            <ListItem sx={{ p: 0   }}>
                                <a><ListItemText sx={{ m: 0, p: 0 }}  primary="Прокат оборудования"/></a>
                            </ListItem>
                            <ListItem sx={{ p: 0   }}>
                                <a><ListItemText sx={{ m: 0, p: 0 }}  primary="Мероприятия"/></a>
                            </ListItem>
                            <ListItem sx={{ p: 0  }}>
                                <a><ListItemText sx={{ m: 0, p: 0 }}  primary="Исполнители"/></a>
                            </ListItem>
                            <ListItem sx={{ p: 0   }}>
                                <a><ListItemText sx={{ m: 0, p: 0 }}  primary="Творческие мастерские"/></a>
                            </ListItem>
                            <ListItem sx={{ p: 0 }}>
                                <a><ListItemText sx={{ m: 0, p: 0 }}  primary="Ремонт оборудования"/></a>
                            </ListItem>
                        </List>
                    </Grid>

                </Grid>
                </Box>
                <hr/>

                <Box sx={{ fontSize: '15px', marginTop: '10px' }}>
                        <p>г. Москва, 109147, Воронцовская улица, 35 Б к.2</p>
                        <p><a href="mailto:feedback@musbooking.com">feedback@musbooking.com</a></p>
                        <a href="tel: +7 (925) 594-77-62">+7 (925) 594-77-62</a>
                </Box>
            </Box>
        </Container>
        </Container>
    )
}






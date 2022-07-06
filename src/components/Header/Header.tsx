import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from 'image/logoHeaderMain.png';
import { SwitchChangeLanguage } from 'components/ChangeLanguage/SwitchChangeLanguage';
import { path } from 'enum';

export const Header: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const { t } = useTranslation();

    return (
        <AppBar position='fixed' color='inherit'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Link to='/'>
                        <Typography
                            variant='h6'
                            noWrap
                            component='div'
                            sx={{
                                mr: 2,
                                ml: 3,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <img
                                style={{ width: '40px' }}
                                src={logo}
                                alt='Logo'
                            />
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <SwitchChangeLanguage />

                            <Link to='/'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {t('header.searchArea')}
                                    </Typography>
                                </MenuItem>
                            </Link>

                            <Link to={path.AddArea}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {t('header.addArea')}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to={path.Login}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {t('header.login')}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                        <Link to='/'>
                            <img
                                style={{ width: '30px', height: '30px' }}
                                src={logo}
                                alt='Logo'
                            />
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'right',
                        }}
                    >
                        <SwitchChangeLanguage />

                        <Link to='/'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                }}
                            >
                                {t('header.searchArea')}
                            </Button>
                        </Link>
                        <Link to={path.AddArea}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                }}
                            >
                                {t('header.addArea')}
                            </Button>
                        </Link>
                        <Link to={path.Login}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                }}
                            >
                                {t('header.login')}
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

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
import logo from 'image/logoAccount.png';
import { path } from 'enum';
import { SwitchChangeLanguage } from 'components/ChangeLanguage/SwitchChangeLanguage';

export const AccountHeader: React.FC = () => {
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
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            onClick={() => localStorage.clear()}
                        >
                            <img
                                style={{ width: '100px' }}
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
                            <Link to={path.Calendar}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {t('cabinet.accountHeader.calendar')}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to={path.Content}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {t('cabinet.accountHeader.content')}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to={path.Orders}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        {t('cabinet.accountHeader.orders')}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to={path.Login}>
                                <MenuItem
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        localStorage.clear();
                                    }}
                                >
                                    <Typography textAlign='center'>
                                        {t('cabinet.accountHeader.logout')}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                        <Link to='/' onClick={() => localStorage.clear()}>
                            <img
                                style={{ width: '105px', height: '35px' }}
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
                        <Link to={path.Calendar}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                }}
                            >
                                {t('cabinet.accountHeader.calendar')}
                            </Button>
                        </Link>
                        <Link to={path.Content}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                }}
                            >
                                {t('cabinet.accountHeader.content')}
                            </Button>
                        </Link>
                        <Link to={path.Orders}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                }}
                            >
                                {t('cabinet.accountHeader.orders')}
                            </Button>
                        </Link>
                        <Link to={path.Login}>
                            <Button
                                onClick={() => {
                                    handleCloseNavMenu();
                                    localStorage.clear();
                                }}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                }}
                            >
                                {t('cabinet.accountHeader.logout')}
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

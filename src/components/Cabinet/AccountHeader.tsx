import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../image/logoAccount.png';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


export const AccountHeader: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/'>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, ml: 3, display: { xs: 'none', md: 'flex' } }}
          >
            <img style={{ width: '100px' }} src={logo} alt='Logo'/>
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
                <Link to='/login'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Календарь</Typography>
                </MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Заявки</Typography>
                </MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Контент</Typography>
                </MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Заказы</Typography>
                </MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Выйти</Typography>
                </MenuItem>
              </Link>
            </Menu>
            <Link to='/'>
              <img style={{ width: '105px', height: '35px' }} src={logo} alt='Logo'/>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
            <Tooltip title='Выйти'>
              <Link to='/login'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                  Календарь
              </Button>
              </Link>
            </Tooltip>
            <Tooltip title='Выйти'>
              <Link to='/login'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                  Заявки
              </Button>
              </Link>
            </Tooltip>
            <Tooltip title='Выйти'>
              <Link to='/login'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                  Контент
              </Button>
              </Link>
            </Tooltip>
            <Tooltip title='Выйти'>
              <Link to='/login'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                  Заказы
              </Button>
              </Link>
            </Tooltip>
            <Tooltip title='Выйти'>
              <Link to='/login'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                  Выйти
              </Button>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
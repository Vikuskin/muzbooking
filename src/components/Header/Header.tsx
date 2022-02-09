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
import logo from '../../image/logo.png';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


const ResponsiveAppBar = () => {
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
            <img style={{ width: '40px' }} src={logo} alt='Logo'/>
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
              <Link to='/'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Поиск площадки</Typography>
                </MenuItem>
              </Link>
              <Link to='/addArea'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Добавить площадку</Typography>
                </MenuItem>
              </Link>
            </Menu>
            <Link to='/'>
              <img style={{ width: '30px', height: '30px' }} src={logo} alt='Logo'/>
            </Link>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
            <Tooltip title='Поиск площадки'>
              <Link to='/'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                  Поиск площадки
                </Button>
              </Link>
            </Tooltip>
            <Tooltip title='Добавить площадку'>
              <Link to='/addArea'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                  Добавить площадку
              </Button>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
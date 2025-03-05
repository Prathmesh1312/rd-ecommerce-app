import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/logo.png';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import NestedMenu from './NestedMenu';
import SearchBar from './SearchBar';

const Logo = styled('div')({
  width: '15%',
  display: 'flex',
  alignItems: 'center',
});

const NavTabs = styled(Tabs)({
  width: '25%',
  color: 'white',
});

const LoginButton = styled(Button)({
  width: '10%',
});

const Navbar = () => {
  return (
    <AppBar position="static" color='default' margin='auto'> 
      <Toolbar>
        <Logo>
          <img src={logo} alt="Amcart Ecommerce Logo" href='/' />
        </Logo>
        <NavTabs>
          <NestedMenu label="Products" />
       </NavTabs>
        <SearchBar placeholder="Search..." />
        <LoginButton color="inherit" href='/login' type="submit" variant="contained" color="primary" sx={{ padding: '18px' }}
        >Login</LoginButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
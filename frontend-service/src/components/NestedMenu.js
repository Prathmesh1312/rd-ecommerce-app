import React from 'react';
import { Menu, MenuItem, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NestedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);
  const [thirdMenuAnchorEl, setThirdMenuAnchorEl] = React.useState(null);
  const [menuId, setMenuId] = React.useState(null);
  const [subMenuId, setSubMenuId] = React.useState(null);
  const [thirdMenuId, setThirdMenuId] = React.useState(null);


  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
    setSubMenuAnchorEl(null);
    setThirdMenuAnchorEl(null);
  };

  const handleSubMenuClick = (event, id) => {
    setSubMenuAnchorEl(event.currentTarget);
    setSubMenuId(id);
    setThirdMenuAnchorEl(null);
  };

  const handleThirdMenuClick = (event, id) => {
    setThirdMenuAnchorEl(event.currentTarget);
    setThirdMenuId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
    setThirdMenuAnchorEl(null);
    setMenuId(null);
    setSubMenuId(null);
  };

  return (
    <Box display="flex" justifyContent="center" >
      <Button aria-controls="men-menu" variant='outlined' aria-haspopup="true" onClick={(e) => handleClick(e, 'men')} sx={{ margin: '0 10px', fontSize: '1.5em' }}>
        Men
      </Button>
      <Button aria-controls="women-menu"  variant='outlined' aria-haspopup="true" onClick={(e) => handleClick(e, 'women')} sx={{ margin: '0 10px',fontSize: '1.5em' }}>
        Women
      </Button>
      <Menu
        id="men-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl) && menuId === 'men'}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={(e) => handleSubMenuClick(e, 'men-clothing')}>Clothing</MenuItem>
        <Menu
          id="men-clothing-menu"
          anchorEl={subMenuAnchorEl}
          keepMounted
          open={Boolean(subMenuAnchorEl) && subMenuId === 'men-clothing'}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem><Button component={Link} to='/c/Men T-shirts'>T-Shirts</Button></MenuItem>
          <MenuItem><Button href='/c/Men Casual Shirts'>Men Casual Shirts</Button></MenuItem>
          <MenuItem><Button href='/c/Men Shorts'>Shorts</Button></MenuItem>
        </Menu>
        <MenuItem onClick={(e) => handleSubMenuClick(e, 'men-accessories')}>Accessories</MenuItem>
        <Menu
          id="men-accessories-menu"
          anchorEl={subMenuAnchorEl}
          keepMounted
          open={Boolean(subMenuAnchorEl) && subMenuId === 'men-accessories'}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem><Button href='/c/Men Watches'>Watches</Button></MenuItem>
          <MenuItem><Button href='/c/Men Sunglasses'>Sunglasses</Button></MenuItem>
        </Menu>
      </Menu>

      <Menu
        id="women-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl) && menuId === 'women'}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={(e) => handleSubMenuClick(e, 'women-indian')}>Indian & Western Wear</MenuItem>
        <Menu
          id="women-indian-menu"
          anchorEl={subMenuAnchorEl}
          keepMounted
          open={Boolean(subMenuAnchorEl) && subMenuId === 'women-indian'}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem><Button href='/c/Women Kurtas & Suits'>Kurtas & Suits</Button></MenuItem>
          <MenuItem><Button href='/c/Women Skirts & Palazzos'>Skirts & Palazzos</Button></MenuItem>
          <MenuItem><Button href='/c/Women Dress Material'>Dress Material</Button></MenuItem>
        </Menu>
        <MenuItem onClick={(e) => handleSubMenuClick(e, 'women-western')}>Western Wear</MenuItem>
        <Menu
          id="women-western-menu"
          anchorEl={subMenuAnchorEl}
          keepMounted
          open={Boolean(subMenuAnchorEl) && subMenuId === 'women-western'}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem><Button href='/c/Women Jeans & Jeggings'>Jeans & Jeggings</Button></MenuItem>
          <MenuItem><Button href='/c/Women Coats and Blazers'>Coats and Blazers</Button></MenuItem>
        </Menu>
        <MenuItem onClick={(e) => handleSubMenuClick(e, 'women-accessories')}>Accessories</MenuItem>
        <Menu
          id="women-accessories-menu"
          anchorEl={subMenuAnchorEl}
          keepMounted
          open={Boolean(subMenuAnchorEl) && subMenuId === 'women-accessories'}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem><Button href='/c/w_watches'>Watches</Button></MenuItem>
          <MenuItem><Button href='/c/w_unglasses'>Sunglasses</Button></MenuItem>
        </Menu>
      </Menu>
    </Box>
  );
};

export default NestedMenu;
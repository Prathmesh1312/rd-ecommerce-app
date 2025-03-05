import React from 'react';
import { Menu, MenuItem, Button, Box } from '@mui/material';

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
    <Box display="flex" justifyContent="center" marginTop={2}>
      <Button aria-controls="men-menu" aria-haspopup="true" onClick={(e) => handleClick(e, 'men')} sx={{ paddingLeft: '25px', paddingRight: '50px' }}>
        Men
      </Button>
      <Button aria-controls="women-menu" aria-haspopup="true" onClick={(e) => handleClick(e, 'women')} sx={{ paddingLeft: '50x', paddingRight: '25px' }}>
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
          <MenuItem>T-Shirts</MenuItem>
          <MenuItem>Casual Shirts</MenuItem>
          <MenuItem>Shorts</MenuItem>
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
          <MenuItem>Watches</MenuItem>
          <MenuItem>Sunglasses</MenuItem>
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
          <MenuItem>Kurtas & Suits</MenuItem>
          <MenuItem>Skirts & Palazzos</MenuItem>
          <MenuItem>Dress Material</MenuItem>
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
          <MenuItem>Jeans & Jeggings</MenuItem>
          <MenuItem>Coats and Blazers</MenuItem>
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
          <MenuItem href='/c/watches'>Watches</MenuItem>
          <MenuItem>Sunglasses</MenuItem>
        </Menu>
      </Menu>
    </Box>
  );
};

export default NestedMenu;
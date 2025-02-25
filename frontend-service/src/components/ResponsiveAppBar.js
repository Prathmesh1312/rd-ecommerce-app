import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  const [anchorElMen, setAnchorElMen] = React.useState(null);
  const openMen = Boolean(anchorElMen);
  const [anchorElMenClothing, setAnchorElMenClothing] = React.useState(null);
  const openMenClothing = Boolean(anchorElMenClothing);
  const [anchorElMenAccessories, setAnchorElMenAccessories] = React.useState(null);
  const openMenAccessories = Boolean(anchorElMenAccessories);


  const [anchorElWomen, setAnchorElWomen] = React.useState(null);
  const openWomen = Boolean(anchorElWomen);
  const [anchorElWomenClothing, setAnchorElWomenClothing] = React.useState(null);
  const openWomenClothing = Boolean(anchorElWomenClothing);
  const [anchorElWomenAccessories, setAnchorElWomenAccessories] = React.useState(null);
  const openWomenAccessories = Boolean(anchorElWomenAccessories);


  const handleOpenMenMenu = (event) => {
    setAnchorElMen(event.currentTarget);
  };

  const handleCloseMenMenu = () => {
    setAnchorElMen(null);
    setAnchorElMenClothing(null); // Close submenus too
    setAnchorElMenAccessories(null);
  };

  const handleOpenMenClothingMenu = (event) => {
    setAnchorElMenClothing(event.currentTarget);
  };

  const handleCloseMenClothingMenu = () => {
    setAnchorElMenClothing(null);
  };

    const handleOpenMenAccessoriesMenu = (event) => {
        setAnchorElMenAccessories(event.currentTarget);
    };

    const handleCloseMenAccessoriesMenu = () => {
        setAnchorElMenAccessories(null);
    };



  const handleOpenWomenMenu = (event) => {
    setAnchorElWomen(event.currentTarget);
  };

  const handleCloseWomenMenu = () => {
    setAnchorElWomen(null);
    setAnchorElWomenClothing(null); // Close submenus too
    setAnchorElWomenAccessories(null);
  };

  const handleOpenWomenClothingMenu = (event) => {
    setAnchorElWomenClothing(event.currentTarget);
  };

  const handleCloseWomenClothingMenu = () => {
    setAnchorElWomenClothing(null);
  };

    const handleOpenWomenAccessoriesMenu = (event) => {
        setAnchorElWomenAccessories(event.currentTarget);
    };

    const handleCloseWomenAccessoriesMenu = () => {
        setAnchorElWomenAccessories(null);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My E-commerce Site
          </Typography>

          {/* Men's Menu */}
          <Button
            id="men-button"
            aria-controls={openMen ? 'men-menu' : undefined}
            aria-haspopup={openMen ? 'true' : undefined}
            onClick={handleOpenMenMenu}
            color="inherit"
            sx={{ marginRight: 50 }}
          >
            Men
          </Button>
          <Menu
            id="men-menu"
            anchorEl={anchorElMen}
            open={openMen}
            onClose={handleCloseMenMenu}
            MenuListProps={{
              'aria-labelledby': 'men-button',
            }}
          >
            <MenuItem>
              <Button
                id="men-clothing-button"
                aria-controls={openMenClothing ? 'men-clothing-menu' : undefined}
                aria-haspopup={openMenClothing ? 'true' : undefined}
                onClick={handleOpenMenClothingMenu}
                sx={{ width: '100%', justifyContent: 'flex-start' }}
              >
                Clothing
              </Button>
              <Menu
                id="men-clothing-menu"
                anchorEl={anchorElMenClothing}
                open={openMenClothing}
                onClose={handleCloseMenClothingMenu}
                
              >
                <MenuItem component={Link} to="/men/clothing/suits" onClick={handleCloseMenClothingMenu} >
                <Button
                id="men-clothing-button"
                sx={{ width: '100%', justifyContent: 'flex-start' }}
              >
                Suits
              </Button>
                </MenuItem>
                <MenuItem component={Link} to="/men/clothing/jeans" onClick={handleCloseMenClothingMenu}>
                  Jeans
                </MenuItem>
              </Menu>
            </MenuItem>

            <MenuItem>
              <Button
                id="men-accessories-button"
                aria-controls={openMenAccessories ? 'men-accessories-menu' : undefined}
                aria-haspopup={openMenAccessories ? 'true' : undefined}
                onClick={handleOpenMenAccessoriesMenu}
                sx={{ width: '100%', justifyContent: 'flex-start' }}
                component={Link} to="/men/accessories"
              >
                Accessories
              </Button>
              <Menu
                id="men-accessories-menu"
                anchorEl={anchorElMenAccessories}
                open={openMenAccessories}
                onClose={handleCloseMenAccessoriesMenu}
              >
                <MenuItem component={Link} to="/men/accessories/wallets" onClick={handleCloseMenAccessoriesMenu}>
                  Wallets
                </MenuItem>
                <MenuItem component={Link} to="/men/accessories/belts" onClick={handleCloseMenAccessoriesMenu}>
                  Belts
                </MenuItem>
              </Menu>
            </MenuItem>
          </Menu>

          {/* Women's Menu (Similar Structure) */}
          <Button
            id="women-button"
            aria-controls={openWomen ? 'women-menu' : undefined}
            aria-haspopup={openWomen ? 'true' : undefined}
            onClick={handleOpenWomenMenu}
            color="inherit"
          >
            Women
          </Button>
          <Menu
            id="women-menu"
            anchorEl={anchorElWomen}
            open={openWomen}
            onClose={handleCloseWomenMenu}
            MenuListProps={{
              'aria-labelledby': 'women-button',
            }}
          >
            {/* ... Women's submenus (follow the same pattern as Men's) */}
            <MenuItem>
              <Button
                id="women-clothing-button"
                aria-controls={openWomenClothing ? 'women-clothing-menu' : undefined}
                aria-haspopup={openWomenClothing ? 'true' : undefined}
                onClick={handleOpenWomenClothingMenu}
                sx={{ width: '100%', justifyContent: 'flex-start' }}              >
                Clothing
              </Button>
              <Menu
                id="women-clothing-menu"
                anchorEl={anchorElWomenClothing}
                open={openWomenClothing}
                onClose={handleCloseWomenClothingMenu}
              >
                <MenuItem component={Link} to="/women/clothing/dresses" onClick={handleCloseWomenClothingMenu}>Dresses</MenuItem>
                <MenuItem component={Link} to="/women/clothing/skirts" onClick={handleCloseWomenClothingMenu}>Skirts</MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem>
              <Button
                id="women-accessories-button"
                aria-controls={openWomenAccessories ? 'women-accessories-menu' : undefined}
                aria-haspopup={openWomenAccessories ? 'true' : undefined}
                onClick={handleOpenWomenAccessoriesMenu}
                sx={{ width: '100%', justifyContent: 'flex-start' }}
              >
                Accessories
              </Button>
              <Menu
                id="women-accessories-menu"
                anchorEl={anchorElWomenAccessories}
                open={openWomenAccessories}
                onClose={handleCloseWomenAccessoriesMenu}
              >
                <MenuItem component={Link} to="/women/accessories/hats" onClick={handleCloseWomenAccessoriesMenu}>Hats</MenuItem>
                <MenuItem component={Link} to="/women/accessories/bags" onClick={handleCloseWomenAccessoriesMenu}>Bags</MenuItem>
              </Menu>
            </MenuItem>
          </Menu>

          {/* ... (About, Contact buttons) */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const pages = ['Home', 'About', 'Services', 'Contact']; // Example page names

export default function MenuAppBar() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }} // Show only on smaller screens
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            My Website
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}> {/* Hide on smaller screens */}
            {pages.map((page) => (
              <Button key={page} color="inherit" component={Link} to={`/${page.toLowerCase()}`}> {/* Use Link if using React Router */}
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
       {/* Drawer for smaller screens */}
      <Drawer
        open={open}
        onClose={handleDrawerToggle}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {pages.map((page, index) => (
              <ListItem key={page} disablePadding>
                <ListItemButton component={Link} to={`/${page.toLowerCase()}`} onClick={handleDrawerToggle}> {/* Close drawer on click */}
                  <ListItemText primary={page} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
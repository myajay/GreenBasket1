import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  // Check if the screen size is mobile (small)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#81C784' }}> {/* Light Green Color */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Green Basket
        </Typography>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            onClick={handleMenuClick}
            sx={{ display: { md: 'none' } }} // Hide on desktop
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
        </Box>
      </Toolbar>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Services</MenuItem>
        </Menu>
      )}
    </AppBar>
  );
};

export default Header;
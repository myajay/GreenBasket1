import React, { useState , useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope } from 'react-icons/fa';

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
  const [userName, setUserName] = useState('');

  // This useEffect will run only once when the component mounts
  useEffect(() => {
    const storedUserName = sessionStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);  // Set the userName from sessionStorage
    }

    // You can optionally listen for sessionStorage changes with a timeout or interval
    const intervalId = setInterval(() => {
      const updatedUserName = sessionStorage.getItem('userName');
      if (updatedUserName && updatedUserName !== userName) {
        setUserName(updatedUserName); // Update state if it changes
      }
    }, 1000); // Check every second

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [userName]); // We check userName to see if it's changed


  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#81C784' }}> {/* Light Green Color */}
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: '#ffffff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', // Adds shadow effect
            
          }}
          
        >
         <span>Green Basket</span> 

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
          {/* <Button color="inherit" className='txtTrans'>
          <Link to="/Login" style={{ color: 'white',textDecoration: 'none', }}>
              <FaUser  />      
         Login
            </Link>
          </Button> */}

<Button color="inherit" className='txtTrans'>
        {/* Check if userName exists in sessionStorage */}
        {userName ? (
          // If userName exists, show the user's name instead of Login
          <span style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
          Hi, {userName}
        </span>
        
        ) : (
          // If userName does not exist, show Login button
          <Link to="/Login" style={{ color: 'white', textDecoration: 'none' }}>
            <FaUser /> Login
          </Link>
        )}
      </Button>


          <Button color="inherit">
            <FaEnvelope style={{ padding: '1px' }} /> Contact
          </Button>
        </Box>
      </Toolbar>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/Login" style={{ color: 'black',textDecoration: 'none', }}>
            <FaUser /> 

              {userName ? (
                
          // If userName exists, show the user's name instead of Login
          <span style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
          Hi, {userName}
        </span>
        
        ) : (
          // If userName does not exist, show Login button
          <Link to="/Login" style={{ color: 'black', textDecoration: 'none' }}>
          Login
          </Link>
        )}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <FaEnvelope /> Contact
          </MenuItem>
        </Menu>
      )}
    </AppBar>
  );
};

export default Header;

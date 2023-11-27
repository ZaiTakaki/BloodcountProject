import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import heroLogo from './Image Hero.svg';

const Admin_Homepage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFE4E4' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="LogoAndTitle">
              <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 26, height: 26 }} />
              <div className="Hospital">
                <span style={{ color: '#FF0000', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood</span>
                <span style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}> </span>
                <span style={{ color: '#861530', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Count</span>
              </div>
            </div>
          </Typography>
          <Button variant="outlined" style={{ color: '#861530' }}>Logout</Button>
        </Toolbar>
      </AppBar>
      <MenuList sx={{ width: 260, height: 200, background: 'rgba(255, 0, 0, 0.75)', border: '1px rgba(255, 255, 255, 0.50) solid' }}>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Donor</MenuItem>
        <MenuItem>Donation</MenuItem>
        <MenuItem>Recipient</MenuItem>
        <MenuItem>Request History</MenuItem>
        <MenuItem>Reports</MenuItem>
      </MenuList>
    </Box>
  );
};

export default Admin_Homepage;

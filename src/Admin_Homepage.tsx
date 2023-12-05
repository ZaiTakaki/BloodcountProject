import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import heroLogo from './Image Hero.svg';
import polygonImage from './Polygon 1.svg'; 
import circleWithBlood from './circlewithblood.png';

const Admin_Homepage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

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
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="LogoAndTitle">
              <img
                className="Header-logo"
                src={heroLogo.toString()}
                alt="Logo"
                style={{ width: 26, height: 26 }}
              />
              <div className="Hospital">
                <span
                  style={{
                    color: '#FF0000',
                    fontSize: 20,
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    letterSpacing: 1,
                    wordWrap: 'break-word',
                  }}
                >
                  Blood
                </span>
                <span
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    letterSpacing: 1,
                    wordWrap: 'break-word',
                  }}
                >
                  {' '}
                </span>
                <span
                  style={{
                    color: '#861530',
                    fontSize: 20,
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    letterSpacing: 1,
                    wordWrap: 'break-word',
                  }}
                >
                  Count
                </span>
              </div>
            </div>
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/Register_User")} style={{ color: '#861530', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530', }} >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <MenuList
        sx={{
          width: 260,
          height: 220,
          background: 'rgba(255, 0, 0, 0.75)',
          border: '1px rgba(255, 255, 255, 0.50)',
          display: isMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MenuItem style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Dashboard</MenuItem>
        <MenuItem onClick={() => navigate("/Admin_Donor")}style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Donor</MenuItem>
        <MenuItem onClick={() => navigate("/Donation_Request")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Donation</MenuItem>
        <MenuItem onClick={() => navigate("/Recipient")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Recipient</MenuItem>
        <MenuItem onClick={() => navigate("/Request_History")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Request History</MenuItem>
        <MenuItem onClick={() => navigate("/Reports")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Reports</MenuItem>
      </MenuList>
      
      <div className="Rectangle63" style={{ width: 349, height: 129, background: '#FFE4E4', borderRadius: 25, position: 'fixed', top: 110, left: 350, }}/>
      <div className="Rectangle64" style={{ width: 370, height: 40, background: '#F63636', borderRadius: 25, position: 'fixed', top: 210, left: 340 }} />
      <div className="TotalDonors" style={{ width: 185, height: 19, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 220, left: 430 }}>
  Total Donors
</div>
     <div className="Ellipse59" style={{width: 76, height: 62, background: 'rgba(255, 0, 76.50, 0.12)', borderRadius: 9999, position: 'fixed', top: 140, left: 490, }}/>
     <div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 160, left: 525 }}>1</div>
     <div className="Rectangle63" style={{ width: 349, height: 129, background: '#FFE4E4', borderRadius: 25, position: 'fixed', top: 110, left: 800, }}/>
<div className="Rectangle64" style={{ width: 370, height: 40, background: '#F63636', borderRadius: 25, position: 'fixed', top: 210, left: 790 }} />
<div className="TotalRequests" style={{ width: 185, height: 19, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 220, left: 880 }}>
Total Requests
</div>
<div className="Ellipse59" style={{ width: 76, height: 62, background: 'rgba(255, 0, 76.50, 0.12)', borderRadius: 9999, position: 'fixed', top: 140, left: 940, }}/>
<div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 160, left: 975 }}>1</div>

<div className="Rectangle63" style={{ width: 349, height: 129, background: '#FFE4E4', borderRadius: 25, position: 'fixed', top: 270, left: 350 }}/>
<div className="Rectangle64" style={{ width: 370, height: 40, background: '#F63636', borderRadius: 25, position: 'fixed', top: 360, left: 340 }} />
<div className="ActiveUsers" style={{ width: 185, height: 19, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 370, left: 430 }}>
Active Users
</div>
<div className="Ellipse59" style={{ width: 76, height: 62, background: 'rgba(255, 0, 76.50, 0.12)', borderRadius: 9999, position: 'fixed', top: 290, left: 490, }}/>
<div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 310, left: 525 }}>2</div>

<div className="Rectangle63" style={{ width: 349, height: 129, background: '#FFE4E4', borderRadius: 25, position: 'fixed', top: 270, left: 800 }}/>
<div className="Rectangle64" style={{ width: 370, height: 40, background: '#F63636', borderRadius: 25, position: 'fixed', top: 360, left: 790 }} />
<div className="Feedback" style={{ width: 185, height: 19, textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 370, left: 880 }}>
  Feedback
</div>
<div className="Ellipse59" style={{ width: 76, height: 62, background: 'rgba(255, 0, 76.50, 0.12)', borderRadius: 9999, position: 'fixed', top: 290, left: 940, }}/>
<div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'fixed', top: 310, left: 975 }}>2</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 450, left: 350 }} />
<div className="A" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 460, left: 460 }}>
  A+
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 35, top: -30, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 490, left: 360 }}>1</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 450, left: 550 }} />
<div className="B" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 460, left: 660 }}>
  B+
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 35, top: -30, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 490, left: 560 }}>2</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 450, left: 750 }} />
<div className="O" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 460, left: 860 }}>
  O+
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 35, top: -30, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 490, left: 760 }}>37</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 450, left: 950 }} />
<div className="AB" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 460, left: 1050 }}>
  AB
  <span style={{ position: 'relative', top: -23, marginLeft: 30 }}>+</span>
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 45, top: -50, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 490, left: 960 }}>8</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 550, left: 350 }} />
<div className="A" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 560, left: 460 }}>
  A-
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 35, top: -30, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 590, left: 360 }}>7</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 550, left: 550 }} />
<div className="B" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 560, left: 660 }}>
  B-
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 35, top: -30, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 590, left: 560 }}>1</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 550, left: 750 }} />
<div className="O" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 560, left: 860 }}>
  O-
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 35, top: -30, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 590, left: 760 }}>10</div>

<div className="Rectangle73" style={{width: 181, height: 73, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 550, left: 950 }} />
<div className="AB" style={{ width: 35, height: 17, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 560, left: 1050 }}>
  AB
  <span style={{ position: 'relative', top: -23, marginLeft: 30 }}>-</span>
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 26, height: 26, marginLeft: 45, top: -50, position: 'relative' }}
  />
</div>
<div style={{ color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 590, left: 960 }}>32</div>

<div className="Rectangle73" style={{width: 334, height: 80, background: '#FFC9D2', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', position: 'fixed', top: 650, left: 350 }} />
<div className="TotalBloodUnitInMl" style={{width: 287, height: 23, color: '#1E1E1E', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word', position: 'fixed', top: 655, left: 355}}>Total blood unit (in ml)</div>
<div style={{color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', position: 'fixed', top: 670, left: 480}}>
  98
  <img
    className="Header-logo"
    src={heroLogo.toString()}
    alt="Logo"
    style={{ width: 49, height: 45, marginLeft: 80, top: -5, position: 'relative' }}
  />
  </div>

      <div className="ellipse" style={{ backgroundColor: '#ff004c1f', borderRadius: '50%', filter: 'blur(200px)', height: '769px', width: '752px', position: 'fixed', bottom: -80, left: 800, zIndex: -1 }} />  
      <img src={polygonImage.toString()} alt="Polygon Image" style={{ width: '200px', height: '200px', borderRadius: '50%', position: 'fixed',  left: 900, bottom: 180, zIndex: -1 }} />       
      <img src={circleWithBlood.toString()} style={{ width: '438px', height: '438px', borderRadius: '50%', position: 'fixed',  left: 1290, bottom: -40, zIndex: -1 }} />

    </Box>
  );
};

export default Admin_Homepage;

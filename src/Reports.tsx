import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import heroLogo from './Image Hero.svg';
import polygonImage from './Polygon 1.svg'; 
import circleWithBlood from './circlewithblood.png';
import smallIcon from './smallIcon.png'; 
import evaArrowUpwardFill from './eva_arrow-ios-upward-fill.png';

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const data = {
    name: 'Stephen Yustiono',
    // other properties...
  };

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
        <MenuItem onClick={() => navigate("/Admin_Homepage")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Dashboard</MenuItem>
        <MenuItem onClick={() => navigate("/Admin_Donor")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Donor</MenuItem>
        <MenuItem onClick={() => navigate("/Donation_Request")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Donation</MenuItem>
        <MenuItem onClick={() => navigate("/Recipient")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Recipient</MenuItem>
        <MenuItem onClick={() => navigate("/Request_History")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Request History</MenuItem>
        <MenuItem onClick={() => navigate("/Reports")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Reports</MenuItem>
      </MenuList>
      
      <div className="Hospital" style={{ width: 396, height: 70, position: 'absolute',  top: 70,  left: 280,  }}>
        <span style={{
          color: '#FF0000',
          fontSize: 40,
          fontFamily: 'Poppins',
          fontWeight: '700',
          letterSpacing: 2,
          wordWrap: 'break-word',
        }}
        >
          Reports
        </span>
        <span
          style={{
            color: 'black',
            fontSize: 40,
            fontFamily: 'Poppins',
            fontWeight: '700',
            letterSpacing: 2,
            wordWrap: 'break-word',
          }}
        >
        </span>
      </div>

      <div className="ellipse" style={{ backgroundColor: '#ff004c1f', borderRadius: '50%', filter: 'blur(200px)', height: '769px', width: '752px', position: 'fixed', bottom: -80, left: 800, zIndex: -1 }} />  
      <img src={polygonImage.toString()} alt="Polygon Image" style={{ width: '200px', height: '200px', borderRadius: '50%', position: 'fixed',  left: 900, bottom: 180, zIndex: -1 }} />       
      <img src={circleWithBlood.toString()} style={{ width: '438px', height: '438px', borderRadius: '50%', position: 'fixed',  left: 1290, bottom: -40, zIndex: -1 }} />
      
      {/* New Component Below Reports */}
      <div className="Component5" style={{width: 290, height: 82, paddingLeft: 14, paddingRight: 14, paddingTop: 14, paddingBottom: 0, background: 'rgba(255, 255, 255, 0.88)', borderRadius: 20, overflow: 'hidden', border: '1px black solid', backdropFilter: 'blur(10px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', position: 'absolute', top: 160, left: 280}}>
  <div className="Frame1194" style={{height: 54, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
    <div className="Frame1185" style={{width: 308, justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
      <div className="Frame1157" style={{height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="Smallicon" style={{width: 16, height: 16, position: 'relative'}}>
        <img src={smallIcon} alt="Small Icon" style={{ width: 16, height: 16, marginRight: 20 }} />
        </div>
        <div className="Appname" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div className="Hangouts" style={{color: '#FF0000', fontSize: 17, fontFamily: 'Mulish', fontStyle: 'italic', fontWeight: '200', lineHeight: 22, wordWrap: 'break-word', marginRight: 20}}>Stephen Yustiono</div>
        </div>
        <div className="D" style={{color: '#595959', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word', marginRight: 30}}>Today 22:02 pm</div>
      </div>
      <div className="EvaArrowIosUpwardFill" style={{ width: 16, height: 16, position: 'relative' }}>
  <img
    src={evaArrowUpwardFill}
    alt="Arrow Upward"
    style={{ width: 16, height: 16, marginTop: 10, marginLeft: -20, transform: 'rotate(180deg)' }}
  />
</div>

</div>
<div className="New" style={{ width: 306, color: 'black', fontSize: 14, fontFamily: 'Be Vietnam Pro', fontWeight: '600', wordWrap: 'break-word' }}>
  Reported “there is a problem on my profile...
</div>

</div>
    <div className="Frame1183" style={{height: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
      <div className="Contenttext" style={{width: 328, height: 20}} />
    </div>
  </div>

<div className="Frame2" style={{width: 320, height: 27, paddingLeft: 12, paddingRight: 12, background: '#FCFCFC', borderRadius: 15, border: '1px black solid', backdropFilter: 'blur(10px)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', position: 'absolute', top: 230, left: 265}}>
  <div className="Frame2" style={{flex: '1 1 0', height: 56, paddingLeft: 12, paddingRight: 12, paddingTop: 18, paddingBottom: 18, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
    <div className="Chat" style={{width: 41, textAlign: 'center', color: '#F42633', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', lineHeight: 20, wordWrap: 'break-word'}}>Chat</div>
  </div>
  <div className="Line1" style={{width: 26, height: 0, transform: 'rotate(90deg)', transformOrigin: '0 0', opacity: 0.20, border: '1px #665BEB solid', marginTop: -24}}></div>
  <div className="Frame2" style={{flex: '1 1 0', height: 56, paddingLeft: 12, paddingRight: 12, paddingTop: 18, paddingBottom: 18, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
    <div className="Check" style={{color: '#F42633', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', lineHeight: 20, wordWrap: 'break-word'}}>Check</div>
  </div>
</div>


<div className="Component5" style={{width: 290, height: 82, paddingLeft: 14, paddingRight: 14, paddingTop: 14, paddingBottom: 0, background: 'rgba(255, 255, 255, 0.88)', borderRadius: 20, overflow: 'hidden', border: '1px black solid', backdropFilter: 'blur(10px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', position: 'absolute', top: 270, left: 280}}>
  <div className="Frame1194" style={{height: 54, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
    <div className="Frame1185" style={{width: 308, justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
      <div className="Frame1157" style={{height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="Smallicon" style={{width: 16, height: 16, position: 'relative'}}>
        <img src={smallIcon} alt="Small Icon" style={{ width: 16, height: 16, marginRight: 20 }} />
        </div>
        <div className="Appname" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div className="Hangouts" style={{color: '#FF0000', fontSize: 17, fontFamily: 'Mulish', fontStyle: 'italic', fontWeight: '200', lineHeight: 22, wordWrap: 'break-word', marginRight: 20}}>Stephen Yustiono</div>
        </div>
        <div className="D" style={{color: '#595959', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word', marginRight: 30}}>Today 22:02 pm</div>
      </div>
      <div className="EvaArrowIosUpwardFill" style={{ width: 16, height: 16, position: 'relative' }}>
  <img
    src={evaArrowUpwardFill}
    alt="Arrow Upward"
    style={{ width: 16, height: 16, marginTop: 10, marginLeft: -20, transform: 'rotate(180deg)' }}
  />
</div>

</div>
<div className="New" style={{ width: 306, color: 'black', fontSize: 14, fontFamily: 'Be Vietnam Pro', fontWeight: '600', wordWrap: 'break-word' }}>
  Reported MAGUSA HOSPITAL of not all...
</div>

</div>
    <div className="Frame1183" style={{height: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
      <div className="Contenttext" style={{width: 328, height: 20}} />
    </div>
  </div>

<div className="Frame2" style={{width: 320, height: 27, paddingLeft: 12, paddingRight: 12, background: '#FCFCFC', borderRadius: 15, border: '1px black solid', backdropFilter: 'blur(10px)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', position: 'absolute', top: 340, left: 265}}>
  <div className="Frame2" style={{flex: '1 1 0', height: 56, paddingLeft: 12, paddingRight: 12, paddingTop: 18, paddingBottom: 18, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
    <div className="Chat" style={{width: 41, textAlign: 'center', color: '#F42633', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', lineHeight: 20, wordWrap: 'break-word'}}>Chat</div>
  </div>
  <div className="Line1" style={{width: 26, height: 0, transform: 'rotate(90deg)', transformOrigin: '0 0', opacity: 0.20, border: '1px #665BEB solid', marginTop: -24}}></div>
  <div className="Frame2" style={{flex: '1 1 0', height: 56, paddingLeft: 12, paddingRight: 12, paddingTop: 18, paddingBottom: 18, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
    <div className="Check" style={{color: '#F42633', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', lineHeight: 20, wordWrap: 'break-word'}}>Check</div>
  </div>
</div>

<div className="Hospital" style={{ width: 396, height: 70, color: '#861530', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word', marginTop: 150, marginLeft: 280 }}>
  Feedback
</div>


<div className="Component5" style={{width: 290, height: 60, paddingLeft: 14, paddingRight: 14, paddingTop: 14, paddingBottom: 0, background: 'rgba(255, 255, 255, 0.88)', borderRadius: 20, overflow: 'hidden', border: '1px black solid', backdropFilter: 'blur(10px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', position: 'absolute', top: 520, left: 280}}>
  <div className="Frame1194" style={{height: 54, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
    <div className="Frame1185" style={{width: 308, justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
      <div className="Frame1157" style={{height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="Smallicon" style={{width: 16, height: 16, position: 'relative'}}>
        <img src={smallIcon} alt="Small Icon" style={{ width: 16, height: 16, marginRight: 20 }} />
        </div>
        <div className="Appname" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div className="Hangouts" style={{color: '#FF0000', fontSize: 17, fontFamily: 'Mulish', fontStyle: 'italic', fontWeight: '200', lineHeight: 22, wordWrap: 'break-word', marginRight: 60}}>Erin Steed</div>
        </div>
        <div className="D" style={{color: '#595959', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word', marginRight: 30}}>Today 16:02 pm</div>
      </div>
      <div className="EvaArrowIosUpwardFill" style={{ width: 16, height: 16, position: 'relative' }}>
  <img
    src={evaArrowUpwardFill}
    alt="Arrow Upward"
    style={{ width: 16, height: 16, marginTop: 10, marginLeft: -20, transform: 'rotate(180deg)' }}
  />
</div>


</div>
<div className="New" style={{ width: 306, color: '#686868', fontSize: 14, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word' }}>
the app is so good and well organized
</div>

</div>
    <div className="Frame1183" style={{height: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
      <div className="Contenttext" style={{width: 328, height: 20}} />
    </div>
  </div>


  <div className="Component5" style={{width: 290, height: 60, paddingLeft: 14, paddingRight: 14, paddingTop: 14, paddingBottom: 0, background: 'rgba(255, 255, 255, 0.88)', borderRadius: 20, overflow: 'hidden', border: '1px black solid', backdropFilter: 'blur(10px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', position: 'absolute', top: 620, left: 280}}>
  <div className="Frame1194" style={{height: 54, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
    <div className="Frame1185" style={{width: 308, justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
      <div className="Frame1157" style={{height: 22, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
        <div className="Smallicon" style={{width: 16, height: 16, position: 'relative'}}>
        <img src={smallIcon} alt="Small Icon" style={{ width: 16, height: 16, marginRight: 20 }} />
        </div>
        <div className="Appname" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <div className="Hangouts" style={{color: '#FF0000', fontSize: 17, fontFamily: 'Mulish', fontStyle: 'italic', fontWeight: '200', lineHeight: 22, wordWrap: 'break-word', marginRight: 10}}>ILIASS BAHTAINE</div>
        </div>
        <div className="D" style={{color: '#595959', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word', marginRight: 10}}>Yesterday 10:02 am</div>
      </div>
      <div className="EvaArrowIosUpwardFill" style={{ width: 16, height: 16, position: 'relative' }}>
  <img
    src={evaArrowUpwardFill}
    alt="Arrow Upward"
    style={{ width: 16, height: 16, marginTop: 10, marginLeft: -20, transform: 'rotate(180deg)' }}
  />
</div>


</div>
<div className="New" style={{ width: 306, color: '#686868', fontSize: 14, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word' }}>
AYAYAYA  YA Gabriel , this up is unbelivable
</div>

</div>
    <div className="Frame1183" style={{height: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
      <div className="Contenttext" style={{width: 328, height: 20}} />
    </div>
  </div>


    </Box>
  );
};

export default Reports;

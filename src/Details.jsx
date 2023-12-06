import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import heroLogo from './Image Hero.svg';
import featuredIcon from './Featured icon.png';
import otherImage from './Image11.png';
import IconsClose from './IconsClose.png';
import voucherImage from './Voucher.png';
import giftcardImage from './Giftcard.png';
import cashImage from './Cash.png';
import sendImage from './send.png';
import giftImage from './gift.png';
import polygonImage from './Polygon 1.svg'; 
import './App.css';

const Details = () => {
  const navigate = useNavigate();
  const [showOtherImage, setShowOtherImage] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleAcceptRequest = () => {
    // Handle your logic for accepting the request
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  const Header = () => {
    return (
      <div className="Header" style={{ position: 'relative' }}>
        <div className="LogoAndTitle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 26, height: 26 }} />
            <div className="Hospital">
              <span style={{ color: '#FF0000', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood</span>
              <span style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}> </span>
              <span style={{ color: '#861530', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Count</span>
            </div>
          </div>
        </div>

        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <div className="Home" onClick={() => navigate('/')}>
            Home
          </div>
          <div className="Service" onClick={() => navigate('/Service')}>
            Service
          </div>
          <div className="About" onClick={() => navigate('/About')}>
            About
          </div>
        </div>

        <div className="Buttons" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
          <img src={showOtherImage ? otherImage : featuredIcon} alt="Featured Icon" style={{ cursor: 'pointer' }} onClick={() => setShowOtherImage(!showOtherImage)} />
        </div>
      </div>
    );
  };

  const Label = () => {
    return (
      <div className="label" style={{ position: 'absolute', left: '100%', top: '6%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <div className="Line1" style={{ position: 'absolute', left: '50%', top: 150, bottom: 0, width: 307, height: '50%', borderLeft: '1px rgba(68, 68, 68, 0.75) solid' }}></div>
        <div className="Hospital" style={{ width: 300, height: 70, marginLeft: '45%', textAlign: 'left' }}>
          <span style={{ color: '#FF0000', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}>Details</span>
          
          <div className="Frame11" style={{ width: 100, height: 40, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 8, background: '#FF8992', justifyContent: 'center', alignItems: 'center', gap: 11, display: 'inline-flex', marginTop: '100px', marginLeft: '-90px' }}>
            <div className="Rewards" style={{ color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
              REWARDS:
            </div>
          </div>
          
          <div className="ThankYouForDonatingYouCanSelectYourRewardsHere" style={{ width: 321, height: 'auto', color: 'rgba(60, 60, 67, 0.60)', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word', position: 'absolute', left: '370px', right: '-20px', top: '-20px', textAlign: 'right'  }}>
            Thank you for donating! You can select your 
          </div>
        </div>

        <div className="RewardsHere" style={{ width: 321, height: 'auto', color: 'rgba(60, 60, 67, 0.60)', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word', position: 'absolute', left: '170px', right: '-30px', top: '3px', textAlign: 'right' }}>
        rewards here
        </div>
       <img src={voucherImage} alt="Voucher" style={{ position: 'absolute', left: '410px', top: '220px' }} />
        <img src={giftcardImage} alt="Giftcard" style={{ position: 'absolute', marginLeft: '13px', marginTop: '200px' }} /> 
       <img src={cashImage} alt="Cash" style={{ position: 'absolute', marginLeft: '13px', marginTop: '250px' }} /> 
       <img src={sendImage} alt="send" style={{ position: 'absolute', marginLeft: '13px', marginTop: '300px' }} />
       <div className="InviteYourFriendsToHotBeans" style={{ width: 259, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word', position: 'absolute', marginLeft: '450px', marginTop: '160px' }}>
            Invite your friend to Blood Count.
          </div>
       <img src={giftImage} alt="gift" style={{ position: 'absolute', marginLeft: '13px', marginTop: '350px' }} />
       <div className="InviteYourFriendsToHotBeans" style={{width: 259, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word', position: 'absolute', marginLeft: '450px', marginTop: '199px' }}>
        You get $5 for every friend that 
        </div>
        <div className="InviteYourFriendsToHotBeans" style={{width: 259, color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word', position: 'absolute', marginLeft: '430px', marginTop: '215px' }}>
        installs and use the app .
        </div>
        <Button variant="text" color="error" style={{ textAlign: 'center', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', position: 'absolute', marginLeft: '100px', marginTop: '400px' }} onClick={() => console.log('Cancel clicked')}>
          Cancel
        </Button>
        <Button
        variant="contained"
        color="error"
        style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '300', letterSpacing: 0.90, wordWrap: 'break-word', position: 'absolute', marginLeft: '200px', marginTop: '400px' }}
        onClick={handleAcceptRequest}
      >
        Accept Request
      </Button>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle id="alert-dialog-title">
          {"Request accepted!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We will send notification to
            recipient.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" style={{ width: 54, height: 18, padding: 10, background: '#FFE4E4', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }} onClick={() => navigate('/Service')} autoFocus>
          Home
          </Button>
        </DialogActions>
      </Dialog>
        
        <div className="Dialog" style={{ width: 800, height: 550, marginTop: '10px' }}>
          <Paper elevation={3} style={{ width: '80%', height: '70%', padding: 40, borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '60px' }}>
            <div style={{ position: 'absolute', top: 90, right: 40, cursor: 'pointer' }}>
              <img src={IconsClose} alt="Close Icon" />
            </div>
            <div className="Jhon Doe" style={{ width: 229, height: 49, color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', textAlign: 'right', marginLeft: '-70px' }}>
              Jhon Doe
            </div>

            <div className="BloodRequested" style={{ position: 'absolute', top: '35%', left: '20%', transform: 'translateX(-50%)', marginTop: '-10px', color: '#FF8992', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>
              Blood requested
            </div>

            <div className="A" style={{ position: 'absolute', top: '37%', left: '15%', transform: 'translateX(-50%)', color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>
              A+
            </div>

            <div className="Hospital" style={{ position: 'absolute', top: '43%', left: '20%', transform: 'translateX(-50%)', color: '#FF8992', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>
              Date of request
            </div>

            <div className="122022" style={{ position: 'absolute', top: '46%', left: '18%', transform: 'translateX(-50%)', color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>
              2/12/2022
            </div>

            <div className="Hospital" style={{ position: 'absolute', top: '52%', left: '17%', transform: 'translateX(-50%)', color: '#FF8992', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>
              Status
            </div>

            <div className="Waiting" style={{ position: 'absolute', top: '55%', left: '18%', transform: 'translateX(-50%)', color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>
              waiting
            </div>

            <div className="Hospital" style={{ position: 'absolute', top: '60%', left: '18%', transform: 'translateX(-50%)', color: '#FF8992', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word' }}>
              Message:
            </div>

            <div className="Rectangle55" style={{ position: 'absolute', top: '63%', left: '15%', width: 250, height: 105, background: '#F8EDED', borderRadius: 25 }} />

            <div className="DialogClose" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            
            </div>
          </Paper>
        </div>
      </div>
    );
  };

  const Box = () => {
    return (
      <div className="box" style={{ position: 'absolute', left: 0 }}>
        <Label />
        <div className="ellipse" style={{ backgroundColor: '#ff004c1f', borderRadius: '50%', filter: 'blur(200px)', height: '769px', width: '752px', position: 'fixed', bottom: -80, left: 60, zIndex: -1 }} />  
      <img src={polygonImage.toString()} alt="Polygon Image" style={{ width: '200px', height: '200px', borderRadius: '50%', position: 'fixed',  left: 350, top: 90, zIndex: -1 }} />           

      </div>
    );
  };

  return (
    <div className="App">
      <Header />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginRight: 10 }}>
          {/* Your Service content can go here */}
        </div>

        <Box />
      </div>

      <div className="Content">
        {/* Add your content specific to the Service page here */}
      </div>
    </div>
  );
};

export default Details;

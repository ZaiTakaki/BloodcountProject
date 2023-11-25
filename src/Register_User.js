import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';

const RegisterUser = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleNavigateToLogin = () => {
    navigate('/Login_User');
  };

  const handleAcceptRequest = () => {
    // Handle your logic for accepting the request
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const Label = () => {
    return (
      <div className="label" style={{ position: 'absolute', left: 400 }}>
        <img
          className="circle-with-blood"
          src={circleWithBlood}
          alt="Circle with Blood"
          style={{
            width: '300px',
            height: '300px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <img className="polygon-above-image" src={require('./Polygon 1.svg').default} alt="Polygon 1" />
        <div className="text-wrapper" style={{ top: '40%', position: 'relative', zIndex: 1 }}>
          Blood Count
        </div>
        <div className="subtext-wrapper" style={{ top: '50%', position: 'relative', zIndex: 1 }}>
          Donate Blood, Save Lives
        </div>
      </div>
    );
  };

  const Box = () => {
    return (
      <div className="box" style={{ position: 'absolute', left: 0 }}>
        <Label />
        <div className="ellipse" />
        <img className="polygon-image" src={require('./Polygon 2.svg').default} alt="Polygon 2" />
      </div>
    );
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="LogoAndTitle">
          <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 26, height: 26 }} />
          <div className="Hospital">
            <span style={{ color: '#FF0000', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood</span>
            <span style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}> </span>
            <span style={{ color: '#861530', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Count</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginRight: 10 }}>
          <div className="SignUp" style={{ width: 199, height: 64, color: 'black', fontSize: 48, fontFamily: 'Poppins-Medium, Helvetica', fontWeight: '500', wordWrap: 'break-word' }}>
            Sign up
          </div>
          <div className="IfYouAlreadyHaveAnAccountRegistered" style={{ width: 336.52, height: 22.75, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>
            If you already have an account registered
          </div>
          <div onClick={handleNavigateToLogin} className="YouCanLoginHere" style={{ width: 312.19, height: 22.75, marginBottom: 20 }}>
            <span style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>You can </span>
            <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Login here!</span>
          </div>
        </div>
        <Box />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth />
        </div>

        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
        </div>

        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="outlined-basic" label="Enter your Email" variant="outlined" fullWidth />
        </div>

        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="outlined-basic" label="Enter your Password" variant="outlined" fullWidth />
        </div>

        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth />
        </div>

        <div className="ByCreatingAnAccountIAgreeWithBloodCountSPrivacyPolicyAndTermsOfService" style={{ width: 410.86, height: 56.97, marginRight: 20 }}>
          <span style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
            By creating an account, I agree with Blood Count’s
          </span>
          <span style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Privacy Policy</span>
          <span style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}> and </span>
          <span style={{ color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>Terms of Service.</span>
        </div>

        <Button
          variant="contained"
          style={{
            width: 419,
            height: 43,
            backgroundColor: '#FFE4E4',
            color: 'black',
            fontSize: 18,
            fontFamily: 'Poppins',
            fontWeight: '600',
            wordWrap: 'break-word',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 44,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex',
            marginRight: 20,
            marginTop: 20,
          }}
          onClick={handleAcceptRequest}
        >
          Register
        </Button>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle id="alert-dialog-title">
            {"SUCCESS!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Create account success
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" style={{ width: 54, height: 18, padding: 10, background: '#FFE4E4', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }} onClick={() => navigate('/Service')} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="Content">
        {/* Add your content specific to the Register page here */}
      </div>
    </div>
  );
};

export default RegisterUser;

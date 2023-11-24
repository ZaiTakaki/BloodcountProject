import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import heroLogo from './Image Hero.svg';
import featuredIcon from './Featured icon.png';
import otherImage from './Image11.png';
import IconsClose from './IconsClose.png';
import './App.css';

const Details = () => {
  const navigate = useNavigate();
  const [showOtherImage, setShowOtherImage] = useState(false);
  const [location] = useState('');
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
    navigate('/Donor_Dashboard');
  };

  const handleSave = () => {
    console.log('Location saved:', location);
    setOpenAlert(true);
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
        {/* Add the Line1 div here */}
        <div className="Line1" style={{ position: 'absolute', left: '50%', top: 150, bottom: 0, width: 307, height: '50%', borderLeft: '1px rgba(68, 68, 68, 0.75) solid' }}></div>
        <div className="Hospital" style={{ width: 300, height: 70, marginLeft: '45%', textAlign: 'left' }}>
          <span style={{ color: '#FF0000', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}>Details</span>
          {/* Add the Location div here */}
          <div
            className="Request"
            style={{
              width: 229,
              height: 49,
              color: 'black',
              fontSize: 32,
              fontFamily: 'Poppins',
              fontWeight: '700',
              letterSpacing: 1.60,
              wordWrap: 'break-word',
              textAlign: 'right',
              marginTop: '120px',
              marginLeft: '-190px',
            }}
          >
            Request
          </div>
          
        </div>

        <div className="Dialog" style={{ width: 800, height: 500, marginTop: '10px' }}>
          <Paper elevation={3} style={{ width: '80%', height: '70%', padding: 40, borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '60px' }}>
            {/* Add close icon at the top right corner */}
          <div style={{ position: 'absolute', top: 90, right: 40, cursor: 'pointer' }}>
            <img src={IconsClose} alt="Close Icon" />
          </div>
            <div className="Jhon Doe" style={{ width: 229, height: 49, color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', textAlign: 'right', marginLeft: '-70px' }}>
              Jhon Doe
            </div>

            <div className="BloodRequested" style={{ width: 185, height: 30, color: '#FF8992', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word', textAlign: 'right', marginTop: '-40px', marginLeft: '-70px' }}>
            Blood requested
            </div>

            <div className="A" style={{ color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word', textAlign: 'left', marginTop: '0', marginLeft: '-60px' }}>
             A+
            </div>

            <div className="Hospital" style={{ width: 185, height: 30, color: '#FF8992', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word', textAlign: 'right', marginTop: '0', marginLeft: '22px' }}>
             Date of request
            </div>

            <div className="122022" style={{ color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.60, wordWrap: 'break-word', textAlign: 'left', marginTop: '20px', marginLeft: '22px' }}>
             2/12/2022
            </div>

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

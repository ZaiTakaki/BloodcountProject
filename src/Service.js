import React from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';

const Service = () => {
  const navigate = useNavigate();

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

          {/* TextField with increased marginRight */}
          <TextField
            id="outlined-basic"
            label="Your TextField Label"
            variant="outlined"
            style={{ width: 288, height: 55, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginLeft: 20, marginRight: 20 }}
          />
        </div>

        {/* Navigation with increased marginRight and aligned to circle-with-blood */}
        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <div className="Home">Home</div>
          <div className="Service">Service</div>
          <div className="About">About</div>
        </div>

        {/* Buttons with increased marginRight */}
        <div className="Buttons" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
          <Button variant="outlined" onClick={() => navigate("/Register_User")} style={{ color: '#861530', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530' }}>Logout</Button>
        </div>
      </div>
    );
  };

  const Label = () => {
    return (
      <div className="label" style={{ position: 'absolute', left: '100%', top: '40%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <img className="circle-with-blood" src={circleWithBlood} alt="Circle with Blood" style={{ width: '400px', height: '400px' }} />
        <img className="polygon-above-image" src={require('./Polygon 1.svg').default} alt="Polygon 1" />
        <div className="text-wrapper" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          <div className="FuelThePulseOfCompassion" style={{ color: '#861530', fontSize: 48, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 2.40, wordWrap: 'break-word', marginBottom: '20px' }}>Fuel the pulse of compassion</div>
          <div className="JoinOurOnlineCommunityWhereEveryClickCanSaveALife" style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '300', textTransform: 'capitalize', letterSpacing: 1, wordWrap: 'break-word' }}>
            "Join our online community where every click can save a life. <br />
            Together, let's rewrite the story of hope, one virtual heartbeat at a time."
          </div>
          {/* Added "Donate Now" and "Blood Finder" buttons */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px' }}>
            {/* Use the navigate function here */}
            <Button variant="contained" onClick={() => navigate("/Donor_Details")} style={{ width: 317, height: 71, padding: 10, background: '#FF1515', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 44, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', marginLeft: '50px' }}>
              Donate Now
            </Button>
            <Button variant="contained" onClick={() => navigate("/Recipient_Dashboard")}style={{ width: 317, height: 71, padding: 10, background: '#FF1515', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 44, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', marginLeft: '50px' }}>
              Blood Finder
            </Button>
          </div>
        </div>
        <div className="subtext-wrapper" style={{ position: 'relative', zIndex: 1 }}> </div>
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
      {/* Header */}
      <Header />

      {/* Content Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginRight: 10 }}>
          {/* Your Service content can go here */}
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Rest of the content */}
      <div className="Content">
        {/* Add your content specific to the Service page here */}
      </div>
    </div>
  );
};

export default Service;

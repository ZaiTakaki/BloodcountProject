import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Button } from '@mui/material';
import heroLogo from './Image Hero.svg';
import featuredIcon from './Featured icon.png';
import otherImage from './Image11.png';

const Service = () => {
  const navigate = useNavigate();
  const [showOtherImage, setShowOtherImage] = useState(false);

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

        {/* Navigation with increased marginRight and aligned to circle-with-blood */}
        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <div className="Home" onClick={() => navigate("/")}>Home</div>
          <div className="Service" onClick={() => navigate("/Service")}>Service</div>
          <div className="About" onClick={() => navigate("/About")}>About</div>
        </div>

        {/* Replace the Logout button with the Featured icon image */}
        <div className="Buttons" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
          {/* Toggle the state on click */}
          <img
            src={showOtherImage ? otherImage : featuredIcon}
            alt="Featured Icon"
            style={{ cursor: 'pointer' }}
            onClick={() => setShowOtherImage(!showOtherImage)}
          />
        </div>
      </div>
    );
  };

  const Label = () => {
    return (
      <div className="label" style={{ position: 'absolute', left: '100%', top: '6%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        {/* Adjusted styling to move Donor Details more to the right */}
        <div className="Hospital" style={{ width: 300, height: 70, marginLeft: '38%', textAlign: 'left' }}>
          <span style={{ color: '#FF0000', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}>Donor</span>
          <span style={{ color: 'black', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}> </span>
          <span style={{ color: '#861530', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}>Details</span>
        </div>
    
        {/* Adjust the size of the Paper component */}
        <div className="Dialog" style={{ width: 900, height: 576, marginTop: '20px' }}>
          {/* Use Material-UI Paper component for the dialog container */}
          <Paper elevation={3} style={{ width: '100%', height: '90%', padding: 40, borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Add the "Blood Group" text above the rest of the content */}
            <div className="BloodGroup" style={{ width: 229, height: 49, color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', textAlign: 'right' }}>
              Blood Group
            </div>
  
            {/* Add the buttons below the "Blood Group" text */}
            <div style={{ display: 'flex', marginTop: '10px' }}>
              <div
                className="Rectangle24"
                style={{
                  width: 58.99,
                  height: 56.57,
                  borderRadius: 3,
                  border: '1px #EB3738 solid',
                  color: '#EB3738',
                  fontSize: 24,
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px',
                }}
              >
                A+
              </div>
              {['B+', 'AB+', 'O+'].map((bloodType, index) => (
                <div
                  key={index}
                  className="Rectangle24"
                  style={{
                    width: 58.99,
                    height: 56.57,
                    borderRadius: 3,
                    border: '1px #EB3738 solid',
                    color: '#EB3738',
                    fontSize: 24,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '100px',
                    marginRight: '10px',
                  }}
                >
                  {bloodType}
                </div>
              ))}
            </div>

            {/* Add the second set of buttons */}
            <div style={{ display: 'flex', marginTop: '10px' }}>
              {['A-', 'B-', 'AB-', 'O-'].map((bloodType, index) => (
                <div
                  key={index}
                  className="Rectangle24"
                  style={{
                    width: 58.99,
                    height: 56.57,
                    borderRadius: 3,
                    border: '1px #EB3738 solid',
                    color: '#EB3738',
                    fontSize: 24,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '60px',
                    marginRight: '10px',
                  }}
                >
                  {bloodType}
                </div>
              ))}
            </div>

            {/* Add the "I don't know" button using Material-UI Button */}
            <Button variant="contained" sx={{ width: 154, height: 36, marginTop: '10px', background: '#FFE4E4', color: '#861530', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20 }}>
              I don’t know
            </Button>
  
            {/* Add the content of your dialog here */}
            <div className="DialogClose" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {/* ... (rest of the content) */}
            </div>
          </Paper>
          {/* Image circle-with-blood removed */}
        </div>
      </div>
    );
  };          

  const Box = () => {
    return (
      <div className="box" style={{ position: 'absolute', left: 0 }}>
        <Label />
        <div className="ellipse" />
        {/* Remove specific image */}
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

import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import Vector from './Vector.png';
import image5 from './image 5.png'; 
import rectangle53 from './Rectangle 53.png';
import rectangle11 from './Rectangle 11.png';
import image10 from './image 10.png'; 
import rectangle12 from './Rectangle 12.png';
import rectangle54 from './Rectangle 54.png';

const HosInfo1 = () => {
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
          {/* Removed the specific content */}
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
          {/* Your Recipient Dashboard content can go here */}
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Rest of the content */}
      <div className="Content" style={{ marginTop: '20px', marginLeft: '-880px' }}>
        <img className="image5" onClick={() => navigate('/HosInfo1')} style={{ width: 550, height: 140, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 5, position: 'relative', zIndex: 2 }} src={image5} alt="Blood donation event" />
        <div className="CebuDoctorsUniversityHospital" style={{ textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 16.10, wordWrap: 'break-word', position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
          Cebu Doctors’ University Hospital
        </div>
      </div>
    </div>
  );
};

export default HosInfo1;

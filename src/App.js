import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';
import heroLogo from './Image Hero.svg';
import bloodDropImage from './blooddrop.png';
import RegisterUser from './Register_User';
import LoginUser from './Login_User'; 
import LoginAdmin from './Login_Admin';
import LoginBloodbankPersonnel from './Login_BloodbankPersonnel';
import LoginHospitalPersonnel from './Login_HospitalPersonnel';
import Service from './Service';
import DonorDetails from './Donor_Details';
import RecipientDashboard from './Recipient_Dashboard';
import BloodbankDashboard from './Bloodbank_Dashboard';

const Box = () => {
  return (
    <div className="box">
      <Label />
      <div className="ellipse" />
      <img className="polygon-image" src={require('./Polygon 2.svg').default} alt="Polygon 2" />
    </div>
  );
};

const Label = () => {
  return (
    <div className="label">
      <img className="polygon-above-image" src={require('./Polygon 1.svg').default} alt="Polygon 1" />
      <div className="text-wrapper" style={{ top: '40%' }}>Blood Count</div>
      <div className="subtext-wrapper" style={{ top: '50%' }}>Donate Blood, Save Lives</div>
      <div className="blooddrop-wrapper">
        <div className="blooddrop-container">
          <div className="blooddrop-background" /> 
          <img className="blooddrop-image" src={bloodDropImage} alt="Blood Drop" />
        </div>
      </div>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        {/* Logo and Title */}
        <div className="LogoAndTitle">
          {/* Logo */}
          <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 26, height: 26 }} />

          {/* Title */}
          <div className="Hospital">
            <span style={{ color: '#FF0000', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood</span>
            <span style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}> </span>
            <span style={{ color: '#861530', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Count</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="Navigation">
          <div className="Home">Home</div>
          <div className="Service">Service</div>
          <div className="About">About</div>
        </div>

        {/* Buttons */}
        <div className="Buttons" style={{ gap: '10px', marginRight: '250px' }}>
          <Button variant="outlined" onClick={() => navigate("/Register_User")} style={{ color: '#861530', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530' }}>Register</Button>
          <Button variant="outlined" onClick={() => navigate("/Login_User")} style={{ color: '#861530', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530' }}>Login</Button>
        </div>
      </div>

      {/* Circle with Label */}
      <Box />

      {/* Rest of the content */}
      <div className="Content">
        
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login_Admin" element={<LoginAdmin />} />
        <Route path="/Login_BloodbankPersonnel" element={<LoginBloodbankPersonnel />} />
        <Route path="/Login_HospitalPersonnel" element={<LoginHospitalPersonnel />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Recipient_Dashboard" element={<RecipientDashboard />} />
        <Route path="/Bloodbank_Dashboard" element={<BloodbankDashboard />} />
        <Route path="/Donor_Details" element={<DonorDetails />} />
        <Route path="/Register_User" element={<RegisterUser />} />
        <Route path="/Login_User" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;

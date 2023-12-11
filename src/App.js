import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';
import heroLogo from './Image Hero.svg';
import bloodDropImage from './blooddrop.png';
import IanImage from './Ian.png';
import Facebook from './facebook.png';
import RegisterUser from './Register_User';
import LoginUser from './Login_User'; 
import LoginAdmin from './Login_Admin';
import LoginBloodbankPersonnel from './Login_BloodbankPersonnel';
import LoginHospitalPersonnel from './Login_HospitalPersonnel';
import Service from './Service';
import DonorDetails from './Donor_Details';
import AvailableDonor from './AvailableDonor';
import AvailableDonors from './AvailableDonors';
import Aplus from './Aplus';
import Bplus from './Bplus';
import ABplus from './ABplus';
import Oplus from './Oplus';
import Aminus from './Aminus';
import Bminus from './Bminus';
import ABminus from './ABminus';
import Ominus from './Ominus';
import BloodRequst from './BloodRequest';
import RecipientDashboard from './Recipient_Dashboard';
import BloodbankDashboard from './Bloodbank_Dashboard';
import DonorDashboard from './Donor_Dashboard';
import Details from './Details';
import HosInfo1 from './HosInfo1';
import Subnational from './Subnational';
import VicenteSotto from './VicenteSotto';
import PhiRedCross from './PhiRedCross';
import Admin_Homepage from './Admin_Homepage.tsx';
import Admin_Donor from './Admin_Donor.tsx';
import Donation_Request from './Donation_Request.tsx';
import Recipient from './Recipient.tsx';
import Request_History from './Request_History.tsx';
import Reports from './Reports.tsx';

const Box = () => {
  return (
    <div className="box">
      <Label />
      <div className="ellipse" style={{ backgroundColor: '#ff004c1f', borderRadius: '50%', filter: 'blur(200px)', height: '769px', width: '752px', position: 'fixed', bottom: -80, left: 60, zIndex: -1 }} /> 
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
          <div className="Service" onClick={() => navigate("/Service")}>Service</div>
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
      <div className="Group10" style={{ width: 316, textAlign: 'center', color: '#333333', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'capitalize', lineHeight: 50, letterSpacing: 1, wordWrap: 'break-word', position: 'absolute', top: '125%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          Group 10
        </div>
        <div className="MeetOurTeam" style={{width: 632, textAlign: 'center', color: '#333333', fontSize: 40, fontFamily: 'Poppins', fontWeight: '600', textTransform: 'capitalize', lineHeight: 50, letterSpacing: 2, wordWrap: 'break-word', position: 'absolute', top: '135%', left: '50%', transform: 'translate(-50%, -50%)' }}>Meet our team</div>
        <img className="Ian-image" src={IanImage} alt="Ian" style={{ width: '60%', maxWidth: 300, height: '508.95', position: 'absolute', top: '170%', left: '30%', transform: 'translate(-50%, -50%)', zIndex: 1  }} />
        <div className="Rectangle17" style={{width: 260, height: 139, background: '#FFE4E4', borderRadius: 5, position: 'absolute', top: '195%', left: '30%', transform: 'translate(-50%, -50%)', zIndex: 1}} />
        
      <div className="Rectangle11" style={{width: 1600, height: 883, background: 'rgba(215, 241, 246, 0.34)'}} />

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
        <Route path="/Details" element={<Details />} />
        <Route path="/HosInfo1" element={<HosInfo1 />} />
        <Route path="/Subnational" element={<Subnational />} />
        <Route path="/VicenteSotto" element={<VicenteSotto />} />
        <Route path="/PhiRedCross" element={<PhiRedCross />} />
        <Route path="/AvailableDonor" element={<AvailableDonor />} />
        <Route path="/AvailableDonors" element={<AvailableDonors />} />
        <Route path="/Admin_Homepage" element={<Admin_Homepage />} />
        <Route path="/Aplus" element={<Aplus />} />
        <Route path="/Bplus" element={<Bplus />} />
        <Route path="/ABplus" element={<ABplus />} />
        <Route path="/Oplus" element={<Oplus />} />
        <Route path="/Aminus" element={<Aminus />} />
        <Route path="/Bminus" element={<Bminus />} />
        <Route path="/ABminus" element={<ABminus />} />
        <Route path="/Ominus" element={<Ominus />} />
        <Route path="/BloodRequest" element={<BloodRequst />} />
        <Route path="/Admin_Donor" element={<Admin_Donor />} />
        <Route path="/Donation_Request" element={<Donation_Request />} />
        <Route path="/Donor_Dashboard" element={<DonorDashboard />} />
        <Route path="/Request_History" element={<Request_History />} />
        <Route path="/Recipient" element={<Recipient />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Register_User" element={<RegisterUser />} />
        <Route path="/Login_User" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;

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

const RecipientDashboard = () => {
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

        {/* Navigation with increased marginRight and aligned to circle-with-blood */}
        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <div className="Home" onClick={() => navigate('/')} style={{ color: '#FF0000', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>home</div>
          <div className="Service">
            <div className="AvailableDonors" onClick={() => navigate('/AvailableDonors')} style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Available Donors</div>
          </div>
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

        {/* New div with search for hospitals */}
        <div className="Frame1460" style={{ width: 280, height: 50, paddingLeft: 10, paddingRight: 10, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 146, display: 'inline-flex', marginTop: '20px', marginLeft: '-2000px' }}>
       <div className="SearchForHospitals" style={{ color: 'black', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>Search for Hospitals</div>
      <img src={Vector} alt="Vector" style={{ width: 17, height: 18 }} />
      </div>
        </div>

        <div className="Hospitals" style={{width: 226, height: 48, color: '#861530', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', marginTop: '30px'}}>Hospitals</div>
        <div className="BloodBank" style={{width: 226, height: 48, color: '#861530', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', marginLeft: '900px', marginTop: '-45px'}}>Blood Bank</div>

      {/* Rest of the content */}
      <div className="Content" style={{ marginTop: '20px',marginLeft: '-100px' }}>
      <img className="image5" onClick={() => navigate('/HosInfo1')} style={{ width: 550, height: 140, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 5, position: 'relative', zIndex: 2 }} src={image5} alt="Blood donation event" />
      <img className="rectangle53" style={{ width: 'auto', height: 140, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 5, position: 'relative', zIndex: 2, marginLeft: '100px' }} src={rectangle53} alt="Rectangle 53" />
      <div className="SubnationalBloodCenterForVisayas" style={{ width: 290, height: 45, textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 16.10, wordWrap: 'break-word', position: 'absolute', top: '39%', left: '69%', transform: 'translate(-50%, -50%)', zIndex: 4 }}>
              Subnational Blood Center for Visayas
            </div>
          <div className="CebuDoctorsUniversityHospital" style={{ textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 16.10, wordWrap: 'break-word', position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
            Cebu Doctors’ University Hospital
          </div>
          <img className="Rectangle11" style={{width: 550, height: 140, boxShadow: '0px 4px 4px rgba(51, 24.86, 24.86, 0.50)', borderRadius: 5, position: 'relative', zIndex: 4, marginRight: '620px', marginTop: '30px'}} src={rectangle11} alt="Rectangle 11" />
        </div>
        <div className="ChongHuaHospitalMandaue" style={{ textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 16.10, wordWrap: 'break-word', position: 'absolute', top: '73%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
            Chong Hua Hospital Mandaue
          </div>
          <img
  className="Image10"
  style={{
    width: 'auto',
    height: 140,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 6,
    left: '68%',  
    transform: 'translateX(-50%)',  
    marginTop: '-145px'
  }}
  src={image10}
  alt="Image 10"
/>
        <div className="PhilippineRedCrossCebuChapter" style={{ width: 290, height: 45, textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 16.10, wordWrap: 'break-word', position: 'absolute', top: '60%', left: '69%', transform: 'translate(-50%, -50%)', zIndex: 7 }}>
        Philippine Red Cross, Cebu Chapter
      </div>
      <img className="Rectangle12" style={{width: 550, height: 140, boxShadow: '0px 4px 4px rgba(51, 24.86, 24.86, 0.50)', borderRadius: 5, position: 'relative', zIndex: 8, marginRight: '715px', marginTop: '30px'}} src={rectangle12} alt="Rectangle 12" />
      <div className="VicenteSottoMemorialMedicalCenterVsmmc" style={{ textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 16.10, wordWrap: 'break-word', position: 'absolute', top: '96%', left: '25%', transform: 'translate(-50%, -50%)', zIndex: 9 }}>
      Vicente Sotto Memorial Medical Center(VSMMC)
          </div>
          <img
  className="Rectangle54"
  style={{
    width: 'auto',
    height: 140,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 10,
    left: '68%',  
    transform: 'translateX(-50%)',  
    marginTop: '30px'
  }}
  src={rectangle54}
  alt="Rectangle 54"
/>
<div className="VicenteSottoMemorialMedicalCenterVsmmcBloodServicesUnit" style={{ width: 290, height: 45, textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 16.10, wordWrap: 'break-word', position: 'absolute', top: '85%', left: '69%', transform: 'translate(-50%, -50%)', zIndex: 11 }}>
Center(VSMMC) Blood Services Unit
      </div>
      </div>
  );
};

export default RecipientDashboard;

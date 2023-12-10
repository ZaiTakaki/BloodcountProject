import React from 'react';
import { Button, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import Image5 from './Image5.png';
import image7 from'./image7.png';


const CebuDocHospitalInformation = () => {
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
          
        </div>

        {/* Navigation with increased marginRight and aligned to circle-with-blood */}
        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          
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
        <div className="label" style={{ position: 'absolute', right: '0', left: '120%', top: '40%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 2 }}>
  <img className="circle-with-blood" src={circleWithBlood} alt="Circle with Blood" style={{ width: '400px', height: '400px' }} />
  <img className="polygon-above-image" src={require('./Polygon 1.svg').default} alt="Polygon 1" />
  <div className="text-wrapper" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
    {/* Removed the specific content */}
    <div className="Frame1198" style={{position: 'absolute',zIndex: 2, width: 166, height: 33, padding: 10, background: '#FF1515', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop: -130,marginLeft: 225, cursor: 'pointer' }} onClick={() => alert('SUCCESS! Request to make a Blood request has been confirmed!')}>
  <div className="Request" style={{ textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Request</div>
</div>
    {/* Request button */}
    
<div style={{ position: 'relative', marginLeft: '10%', marginTop: '-10%' }}>
      <div className="Rectangle60" style={{ width: 532, height: 280, background: '#F8EDED', borderRadius: 25, position: 'relative', marginLeft: '30%', marginTop: '-70%' }}>
        {/* Make a Blood Request */}
        <div className="MakeABloodRequest" style={{ position: 'absolute', left: '30%', top: '10%', transform: 'translate(-50%, -50%)', width: 200, height: 41, textAlign: 'right', color: '#FF0000', fontSize: 22, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>
          Make a Blood Request
        </div>

        {/* Blood Group */}
        <div className="BloodGroup" style={{ width: 143, height: 29, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word', position: 'absolute', top: '28%', left: '25%', transform: 'translate(-50%, -50%)' }}>
          Blood Group
        </div>

        <div className="CombinedBloodTypeRectangle" style={{position: 'absolute', width: 250, height: 25, background: '#FFFBFB', display: 'flex', marginTop: 80, marginLeft: '73%', transform: 'translate(-50%, 0%)' }}>
          {/* Blood Types Dropdown */}
          <select className="BloodTypeDropdown" style={{ flex: '1', border: 'none', background: 'transparent', outline: 'none', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', borderRadius: '5px' }}>
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* Unit (in ml) */}
        <div className="UnitInMl" style={{ width: 128, height: 29, color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word', position: 'absolute', top: '50%', left: '24%', transform: 'translate(-50%, -50%)' }}>
          Unit (in ml)
        </div>
      </div>
    </div>

    <input
      type="number"
      className="Rectangle61Input"
      style={{ width: 237, height: 31, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', position: 'absolute', marginTop: '-122px', left: '110%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}
    />
  </div>

 

  <div className="subtext-wrapper" style={{ position: 'relative', zIndex: 1 }}> </div>
</div>

      
    );
  };

  const Box = () => {
    return (
      <div className="box" style={{ position: 'absolute', left: 0 }}>
        <Label />
        <div className="ellipse" style  = {{ position: 'absolute',right: '0' , left: '120%', top: '40%', transform: 'translate(-50%, -50%)', textAlign: 'center' }} />
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
          {/* Your Bloodbank Dashboard content can go here */}
          
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Rest of the content */}
      <div className="Content" style={{ marginTop: 20, marginLeft: -750, marginRight: 20 }}>
        {/* Add your content specific to the Bloodbank Dashboard page here */}
        <div style={{ position: 'relative', textAlign: 'center', marginTop: 20 }}/>
        <img
      className="Image5"
      src={Image5}
      alt="Cebu Doctors' University Hospital"
      style={{
        width: 550,
        height: 140,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        marginBottom: 10,
      }}
    />
    <div
      className="CebuDoctorsUniversityHospital"
      style={{
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '600',
        lineHeight: 16.10,
        wordWrap: 'break-word',
        position: 'absolute',
        bottom: 0,
        top: -500,
        left: '23%',
        transform: 'translate(-50%, 50%)',
        zIndex: 3,
      }}
    >
      Cebu Doctors’ University Hospital
    </div>
      </div>
      <div className="InformationDetails" style={{ color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', marginLeft: '-80%', marginTop: 10 }}>
    Information Details:
  </div>
  <div className="AddressOsmeABoulevardCebuCityCebu" style={{ marginLeft: '-70%', marginTop: 10 }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Address: </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Osmeña Boulevard, Cebu City, Cebu</span>
  </div>
  {/* Hours */}
{/* Hours */}
<div className="Hours" style={{ marginLeft: '-75%', marginTop: 10 }}>
  <span style={{ display: 'block', marginBottom: '5px' }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Hours: </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Saturday </span>
    <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Open 24 hours</span>
  </span>
  <span style={{ display: 'block', marginBottom: '5px', marginLeft: '55px' }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Sunday </span>
    <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Open 24 hours</span>
  </span>
  <span style={{ display: 'block', marginBottom: '5px', marginLeft: '50px' }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Monday </span>
    <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Open 24 hours</span>
  </span>
  <span style={{ display: 'block', marginBottom: '5px', marginLeft: '50px' }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Tuesday </span>
    <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Open 24 hours</span>
  </span>
  <span style={{ display: 'block', marginBottom: '5px', marginLeft: '35px' }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Wednesday </span>
    <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Open 24 hours</span>
  </span>
  <span style={{ display: 'block', marginBottom: '5px', marginLeft: '48px' }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Thursday </span>
    <span style={{ color: '#FC0000', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Open 24 hours</span>
  </span>
  <span style={{ display: 'block', marginBottom: '5px', marginLeft: '65px' }}>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> </span>
    <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Friday </span>
    <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Open 24 hours</span>
  </span>
</div>
{/* Phone Information */}
<div className="Phone09222152471" style={{ marginLeft: '-80%', marginTop: 10 }}>
  <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word' }}>Phone</span>
  <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>:</span>
  <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}> </span>
  <span style={{ color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word' }}>0922 215 2471</span>
</div>

<div className="LocationMap" style={{ color: '#861530', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginLeft: '-83%', marginTop: 10 }}>
  Location Map:
</div>

<img className="image7" src = {image7}  alt ="map" style={{ width: 550, height: 170, borderRadius: 25,
 marginTop: 20, marginLeft: 20, marginRight: 800 }} />

<button
  className="Rectangle54Button"
  style={{
    width: 325,
    height: 57,
    background: '#FFE4E4',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    marginRight: 920,
    marginLeft: 10,
    marginTop: 20,
    position: 'relative',
    cursor: 'pointer', // Add this line to show a pointer cursor on hover
  }}
  onClick={() => {
    // Redirect to the Google Map of Cebu Doctors' University Hospital
    window.location.href = 'https://www.google.com/maps/place/Cebu+Doctors’+University+Hospital/@10.3144612,123.8894485,17z/data=!3m1!4b1!4m6!3m5!1s0x33a999497a3994e7:0x6ded817ad9ec72ee!8m2!3d10.3144559!4d123.8920288!16s%2Fm%2F026psd8?entry=ttu';
  }}
>
  {/* Proceed */}
  <div
    className="Proceed"
    style={{
      color: 'black',
      fontSize: 18,
      fontFamily: 'Poppins',
      fontWeight: '600',
      wordWrap: 'break-word',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    Proceed
  </div>
</button>
</div>


  );
};
 

export default CebuDocHospitalInformation;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import { Button } from '@mui/material';
import './BloodRequest.css';

const BloodRequst = () => {
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
        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button color="secondary"  onClick={() => navigate("/")} style={{ color: '#000000', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/AvailableDonor")} style={{ color: '#000000', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Available Donors</Button>
          <Button color="secondary" onClick={() => navigate("/BloodRequest")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Blood Request</Button>
        </div>

        {/* Buttons with increased marginRight */}
        <div className="Buttons" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
          <Button variant="outlined" onClick={() => navigate("/Hospital_Dashboard")} style={{ color: '#ffffff', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '50px', border: '2px solid #000000', backgroundColor: '#ef1212' }}>X</Button>
        </div>
      </div>
    );
  };

  const Label = () => {
   return (
     <div className="label" style={{ position: 'absolute', left: '120%', top: '55%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
       <img className="circle-with-blood" src={circleWithBlood} alt="Circle with Blood" style={{ width: '400px', height: '400px' }} />
       <img className="polygon-above-image" src={require('./Polygon 1.svg').default} alt="Polygon 1" />
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

 // State to manage patient data
 const [patientData, setPatientData] = useState({
   patientName: '',
   contactNumber: '',
   patientAge: '',
   reason: '',
   BloodTypeDropdown: '',
   quantity: '',
 });

 // Handle changes in patient data input fields
 const handlePatientDataChange = (field, value) => {
   setPatientData((prevData) => ({
     ...prevData,
     [field]: value,
   }));
 };

 // Handle blood request
 const handleRequest = () => {
   // Store patient data in local storage
   localStorage.setItem('patientData', JSON.stringify(patientData));

   // Navigate to home page or another destination
   navigate('/');
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
        <div className='recipient-request-br'>
           <span style={{ color: '#FF0000', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>View Recipient Request</span>
        </div>

        <div className='red-boxes-br'>
           <div className='patient-name-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Patient Name</span>
           </div>
           <div className='patient-age-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Age</span>
           </div>
           <div className='patient-reason-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Reason</span>
           </div>
           <div className='patient-bloodgroup-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood Group</span>
           </div>
           <div className='patient-unit-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Unit</span>
           </div>
            {/*<div className='patient-date-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Date</span>
           </div>*/}
           <div className='patient-contactnumber-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Contact Number</span>
           </div>
           {/*<div className='patient-status-br'>
              <span style={{ color: '#ffffff', fontSize: 30, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Status</span>
           </div>*/}
        </div>

        <div className='white1-boxes-br'>
        <div className='w-patient-name-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>{localStorage.getItem('patientName')}</span>
            </div>
            <div className='w-patient-age-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>{localStorage.getItem('patientAge')}</span>
            </div>
            <div className='w-patient-reason-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>{localStorage.getItem('reason')}</span>
            </div>
            <div className='w-patient-bloodgroup-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>{localStorage.getItem('BloodTypeDropdown')}</span>
            </div>
            <div className='w-patient-unit-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>{localStorage.getItem('unit')}</span>
            </div>
            {/*<div className='w-patient-date-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Nov. 5 2023</span>
  </div>*/}
            <div className='w-patient-contactnumber-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>{localStorage.getItem('contactInfo')}</span>
            </div>
            {/*<div className='w-patient-status-br'>
              <span style={{ color: '#4b3c3c', fontSize: 25, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Pending</span>
            </div>*/}
        </div>

        </div>
    </div>
  );
};

export default BloodRequst;
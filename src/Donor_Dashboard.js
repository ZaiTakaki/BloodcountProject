import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,  Select, InputLabel, MenuItem } from '@mui/material';
import heroLogo from './Image Hero.svg';
import featuredIcon from './Featured icon.png';
import otherImage from './Image11.png';
import IconsClose from './IconsClose.png';
import './App.css';

const DonorDashboard = () => {
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
        <div className="Line1" style={{ position: 'absolute', left: '45%', top: 150, bottom: 0, width: 307, height: '50%', borderLeft: '1px rgba(68, 68, 68, 0.75) solid' }}></div>
        <div className="Hospital" style={{ width: 300, height: 70, marginLeft: '38%', textAlign: 'left' }}>
          <span style={{ color: '#FF0000', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}>Donate</span>
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
            }}
          >
            Request
          </div>

            {/* Container for rectangles on new lines */}
<div style={{ marginTop: '180px', marginLeft: '-150px' }}>
  {/* Add four Rectangle5 divs below the Request div */}
  {[...Array(4)].map((_, index) => (
    <div key={index} style={{ position: 'relative' }}>
      <div
        className="Rectangle5"
        style={{
          width: 414,
          height: 92,
          background: 'white',
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)',
          borderRadius: 12,
          border: '1px #EB3738 solid',
          marginBottom: '10px', // Adjust the margin as needed
          position: 'relative',
        }}
      >
        <div
          className="JhonDoe"
          style={{
            width: 79.02,
            height: 12.95,
            color: 'black',
            fontSize: 15,
            fontFamily: 'Lexend',
            fontWeight: '400',
            wordWrap: 'break-word',
            position: 'absolute',
            top: '20%', // Adjust the top position as needed
            transform: 'translateY(-50%)',
            left: 10, // Adjust the left position as needed
          }}
        >
          Jhon Doe
        </div>
        <div
          className="CebuCity"
          style={{
            width: 88,
            height: 11,
            color: 'black',
            fontSize: 12,
            fontFamily: 'Lexend',
            fontWeight: '400',
            wordWrap: 'break-word',
            position: 'absolute',
            top: '70%', // Adjust the top position as needed
            transform: 'translateY(-50%)', // Adjust the transform as needed
            left: 10, // Adjust the left position as needed
          }}
        >
          Cebu City
        </div>
        {/* Add the new div inside the Rectangle5 div */}
        <div
          className="923086785745"
          style={{
            width: 97.94,
            height: 10.22,
            position: 'absolute',
            top: '80%', // Adjust the top position as needed
            transform: 'translateY(-50%)', // Adjust the transform as needed
            left: 10, // Adjust the left position as needed
          }}
        >
          <span style={{ color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>+</span>
          <span style={{ color: 'black', fontSize: 12, fontFamily: 'Lexend', fontWeight: '400', wordWrap: 'break-word' }}>923086785745</span>
        </div>
        {/* Add the new div inside the Rectangle5 div */}
<div
  className="122022"
  style={{
    width: 74.56,
    height: 10.22,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Lexend',
    fontWeight: '400',
    wordWrap: 'break-word',
    position: 'absolute',
    top: '20%', // Adjust the top position as needed
    transform: 'translateY(-50%)',
    right: 45, // Adjust the right position as needed
  }}
>
  02/12/2022
</div>

{/* Add the new div inside the Rectangle5 div */}
<div
  className="Rectangle23"
  style={{
    width: 27.79,
    height: 14.46,
    background: '#EB3738',
    borderRadius: 3,
    position: 'absolute',
    top: '20%', // Adjust the top position as needed
    transform: 'translateY(-50%)',
    right: 15, // Adjust the right position as needed
  }}
>
{/* New div inside Rectangle23 */}
<div
    className="A"
    style={{
      width: 17.81,
      height: 9.54,
      color: 'white',
      fontSize: 12,
      fontFamily: 'Roboto',
      fontWeight: '400',
      wordWrap: 'break-word',
      position: 'absolute',
      top: '50%', // Adjust the top position as needed
      transform: 'translateY(-50%)',
      right: 5, // Adjust the right position as needed
    }}
  >
    A+
  </div>
</div>
{/* New div in the lower right corner */}
<div
                  className="Frame1195"
                  style={{
                    width: 40,
                    height: 1,
                    padding: 10,
                    background: '#FF1515',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    display: 'inline-flex',
                    position: 'absolute',
                    bottom: 20, // Adjust the bottom position as needed
                    right: 20, // Adjust the right position as needed
                  }}
                >
                  <div
                    className="ViewDetails"
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 6,
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      letterSpacing: 0.55,
                      wordWrap: 'break-word',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate("/Details")} 
                  >
                    View Details
                  </div>
                  </div>

        <div
          className="Rectangle34"
          style={{
            width: 193.65,
            height: 92,
            opacity: 0.30,
            background: '#FFE9E8',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 68,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 68,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
    </div>
  ))}
</div>

          {/* Availability Status Select */}
          <div style={{ marginTop: '400px', width: 300, position: 'absolute', left: 'calc(24% - 169.5px)' }}>
            <InputLabel id="demo-simple-select-label">Availability Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={10}
              label="Availability Status"
              style={{ width: '100%', height: '40.60px' }}
            >
              <MenuItem value={10}>Available Now</MenuItem>
              <MenuItem value={20}>Available with Prior Notice</MenuItem>
              <MenuItem value={30}>Always Available</MenuItem>
              <MenuItem value={40}>Custom Availability</MenuItem>
            </Select>
          </div>
        </div>

        <div className="Dialog" style={{ width: 900, height: 500, marginTop: '10px' }}>
          <Paper elevation={3} style={{ width: '90%', height: '90%', padding: 40, borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Add close icon at the top right corner */}
          <div style={{ position: 'absolute', top: 90, right: 30, cursor: 'pointer' }}>
            <img src={IconsClose} alt="Close Icon" />
          </div>
            <div className="BloodGroup" style={{ width: 229, height: 49, color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', textAlign: 'right' }}>
              Blood Group
            </div>

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
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginRight: '10px' }}>
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
                    }}
                  >
                    {bloodType}
                  </div>
                </div>
              ))}
            </div>

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
                    marginBottom: '300px',
                    marginRight: '10px',
                  }}
                >
                  {bloodType}
                </div>
              ))}
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

export default DonorDashboard;

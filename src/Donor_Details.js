import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Button, Slider, Typography, TextField } from '@mui/material';
import heroLogo from './Image Hero.svg';
import featuredIcon from './Featured icon.png';
import otherImage from './Image11.png';
import profileIcon from './Profile.png';
import locationIcon from './location.svg'; 
import IconsClose from './IconsClose.png';
import polygonImage from './Polygon 1.svg'; 
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './App.css';

const DonorDetails = () => {
  const navigate = useNavigate();
  const [showOtherImage, setShowOtherImage] = useState(false);
  const [weight, setWeight] = useState(65);
  const [location, setLocation] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState(null);
  const [isSliderMounted, setIsSliderMounted] = useState(false);
  const weightSliderLabelRef = useRef(null);
  const [dontKnowButtonClicked, setDontKnowButtonClicked] = useState(false);

  const handleDontKnowButtonClick = () => {
  setDontKnowButtonClicked((prevClicked) => !prevClicked);
  // Add any other logic you want to perform when the button is clicked
};

  useEffect(() => {
    // Update isSliderMounted after the component mounts
    setIsSliderMounted(true);
  }, []);

  const handleSliderChange = (_, newValue) => {
    console.log('Slider changed:', newValue);
    if (isSliderMounted) {
      setWeight(newValue);
    }
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Inside the DonorDetails component
const [openAlert, setOpenAlert] = useState(false);

const handleAlertClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenAlert(false);

  // Navigate to Donor_Dashboard.js after closing the alert
  navigate("/Donor_Dashboard");
};

const handleSave = () => {
  // Add logic to save the location (e.g., send it to the server)
  console.log('Location saved:', location);

  // Show the alert
  setOpenAlert(true);
};

const handleBloodTypeButtonClick = (bloodType) => {
  setSelectedBloodType((prevSelectedBloodType) => {
    if (prevSelectedBloodType === bloodType) {
      return null; // Deselect if already selected
    } else {
      return bloodType;
    }
  });
};

  // Function to check if a blood type button is selected
  const isBloodTypeSelected = (bloodType) => {
    return selectedBloodType === bloodType;
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
          <div className="Home" onClick={() => navigate("/")}>Home</div>
          <div className="Service" onClick={() => navigate("/Service")}>Service</div>
          <div className="About" onClick={() => navigate("/About")}>About</div>
        </div>

        <div className="Buttons" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
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
        {/* Add the Line1 div here */}
      <div className="Line1" style={{ position: 'absolute', left: '50%', top: 150, bottom: 0, width: 307, height: '50%', borderLeft: '1px rgba(68, 68, 68, 0.75) solid' }}></div>
        <div className="Hospital" style={{ width: 300, height: 70, marginLeft: '38%', textAlign: 'left' }}>
          <span style={{ color: '#FF0000', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}>Donor</span>
          <span style={{ color: 'black', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}> </span>
          <span style={{ color: '#861530', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 2, wordWrap: 'break-word' }}>Details</span>
          {/* Add the Location div here */}
<div className="Location" style={{ width: 229, height: 49, color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', textAlign: 'right', marginTop: '120px' }}>
  Location
</div>

{/* Move the Location div to the left without moving the Google Maps iframe */}
<div className="Location" style={{textAlign: 'center', marginTop: '420px', color: 'rgba(115, 115, 115, 0.75)', fontSize: 25, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', position: 'absolute', left: '67%', transform: 'translateX(-50%)' }}>
  Location
</div>

<div className="Rectangle1" style={{ width: 356, height: 59, background: '#D9D9D9', boxShadow: '8px 8px 16px rgba(154.06, 154.06, 154.06, 0.25)', borderRadius: 5, position: 'absolute', left: '80%', transform: 'translateX(-50%)', marginTop: '455px' }}>
  {/* Move the TextField inside the Rectangle1 div */}
  <TextField
    label="Location"
    variant="outlined"
    value={location}
    onChange={handleLocationChange}
    style={{ width: 356, marginLeft: '1%' }}
  />
</div>

{/* Add the Save button below the Rectangle1 div */}
<Button
  variant="contained"
  onClick={handleSave}
  style={{
    width: 126,
    height: 45,
    padding: 10,
    background: '#FF1515',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex',
    position: 'absolute',
    left: '93%',
    transform: 'translateX(-50%)',
    marginTop: '550px',
  }}
>
  <div className="Save" style={{color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Save</div>
</Button>

{/* Snackbar for success message */}
<Snackbar
  open={openAlert}
  autoHideDuration={6000} // Adjust the duration as needed
  onClose={handleAlertClose}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
  <Alert elevation={6} variant="filled" onClose={handleAlertClose} severity="success">
    <AlertTitle>Success</AlertTitle>
    Request to be a donor has been sent for approval
  </Alert>
</Snackbar>

<img
  src={locationIcon}
  alt="Location Icon"
  style={{ width: 16.90, height: 21.41, marginTop: '420px', position: 'absolute', left: '58%' }}
/>

{/* Add the Google Map iframe below the Rectangle1 div */}
<div style={{ marginTop: '180px', marginLeft: '-95%' }}>
<iframe
  title="Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251170.20390927076!2d123.68147563978938!3d10.379060195097757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999258dcd2dfd%3A0x4c34030cdbd33507!2sCebu%20City%2C%206000%20Cebu!5e0!3m2!1sen!2sph!4v1702373123638!5m2!1sen!2sph"
  width="500"
  height="230"
  style={{ border: 0, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>
        
      </div>

        <div className="Dialog" style={{ width: 900, height: 500, marginTop: '10px' }}>
          <Paper elevation={3} style={{ width: '100%', height: '90%', padding: 40, borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Adjust the right property to move the close icon to the right */}
            <div style={{ position: 'absolute', top: 90, left: 920, cursor: 'pointer' }}>
              <img src={IconsClose} alt="Close Icon" />
            </div>
            <div className="BloodGroup" style={{ width: 229, height: 49, color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word', textAlign: 'right' }}>
              Blood Group
            </div>

            <div style={{ display: 'flex', marginTop: '10px' }}>
        {['A+', 'B+', 'AB+', 'O+'].map((bloodType, index) => (
          <div
            key={index}
            className="Rectangle24"
            style={{
              width: 58.99,
              height: 56.57,
              borderRadius: 3,
              border: isBloodTypeSelected(bloodType) ? '1px #FFFFFF solid' : '1px #EB3738 solid',
              color: isBloodTypeSelected(bloodType) ? '#FFFFFF' : '#EB3738',
              fontSize: 24,
              fontFamily: 'Roboto',
              fontWeight: '400',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              marginRight: '10px',
              cursor: 'pointer',
              background: isBloodTypeSelected(bloodType) ? '#FF1C1C' : 'transparent',
            }}
            onClick={() => handleBloodTypeButtonClick(bloodType)}
          >
            {bloodType}
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
              border: isBloodTypeSelected(bloodType) ? '1px #FFFFFF solid' : '1px #EB3738 solid',
              color: isBloodTypeSelected(bloodType) ? '#FFFFFF' : '#EB3738',
              fontSize: 24,
              fontFamily: 'Roboto',
              fontWeight: '400',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '300px',
              marginRight: '10px',
              cursor: 'pointer',
              background: isBloodTypeSelected(bloodType) ? '#FF1C1C' : 'transparent',
            }}
            onClick={() => handleBloodTypeButtonClick(bloodType)}
          >
            {bloodType}
          </div>
        ))}
      </div>

            <Button
  variant="contained"
  onClick={handleDontKnowButtonClick}
  style={{
    width: 200,
    height: 36,
    marginBottom: '20px',
    background: '#FFE4E4',
    color: '#861530',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 20,
    position: 'absolute',
    left: '16%',
    top: '360px',
    transform: 'translateX(-50%)',
  }}
>
  <div className="Circle" style={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid #861530', position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', backgroundColor: dontKnowButtonClicked ? '#FF1C1C' : 'transparent' }} />
  I don't know
</Button>

            <div style={{ position: 'absolute', top: 450, left: '15%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
              <img src={profileIcon} alt="Profile Icon" style={{ width: 24, height: 24, marginRight: '10px' }} />
              <Typography ref={weightSliderLabelRef} id="weight-slider-label" gutterBottom>
                Weight: {weight}KGS
              </Typography>
            </div>

            {/* Weight element replaced with Slider */}
            <div className="Weight65kgs" style={{ marginBottom: '100px', textAlign: 'center', top: 500, color: '#FF3737', fontWeight: '500', position: 'absolute', left: '25%', transform: 'translateX(-50%)' }}>
          <Slider
            value={weight}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}KGS`}
            min={40}
            max={120}
            step={5}
            sx={{ color: '#FF3737', width: 377 }}
            aria-labelledby="weight-slider-label"
          />
        </div>

            <div className="DialogClose" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {/* ... (rest of the content) */}
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
        <div className="ellipse" style={{ backgroundColor: '#ff004c1f', borderRadius: '50%', filter: 'blur(200px)', height: '769px', width: '752px', position: 'fixed', bottom: -80, left: 60, zIndex: -1 }} />  
      <img src={polygonImage.toString()} alt="Polygon Image" style={{ width: '200px', height: '200px', borderRadius: '50%', position: 'fixed',  left: 240, top: 90, zIndex: -1 }} />           

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

export default DonorDetails;

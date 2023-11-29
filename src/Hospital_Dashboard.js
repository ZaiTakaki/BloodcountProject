import React, {useState} from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import Image5 from  './Image5.png';
import rectangle11 from './rectangle11.png';
import rectangle12 from './rectangle12.png';
import Vector from './Vector.png';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';



const HospitalDashboard = () => {
  const navigate = useNavigate();

  const Header = () => {
  
    const [content, setContent] = useState('');

    return (
      <div className="Header" style={{ position: 'relative' }}>
        <div className="LogoAndTitle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: -90, marginLeft: 20, marginRight: 20 }}>
            <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 26, height: 26 }} />
            <div className="Hospital">
              <span style={{ color: '#FF0000', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood</span>
              <span style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}> </span>
              <span style={{ color: '#861530', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Count</span>
            </div>
          </div>
          
          {/* TextField with increased marginRight */}
          <div className="search-donor" style={{ backgroundColor: 'white', display: 'flex', marginRight: 20, }}>
      <Input
        id="outlined-basic"
        label=" Search for Blood Banks"
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Search for Blood Donor."
        disableUnderline={true}
        style={{
          marginLeft: -160,
          marginRight: 20,
          marginTop: 100,
          border: '1px #FFC3C3 solid',
          borderRadius: 100,
          width: 355,
          height: 55,
          display: 'flex', // Align icon at the end
          justifyContent: 'flex-end', // Align icon at the end
        }}
        endAdornment={
          <InputAdornment position="end">
            <img
              src={Vector} // Replace 'Vector' with the actual path to your vector image
              alt="Search Icon"
              style={{ width: 17, height: 18, marginLeft: -35 }}
            />
          </InputAdornment>
        }
      />
    </div>


        </div>

        {/* Navigation with increased marginRight and aligned to circle-with-blood */}
        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0 }}>
        <div className="Home" style={{color: '#FF0000', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word'}}>home</div>
          <div className="AvailableDonors" style={{color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500',
           textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word'}}onClick={() => navigate("/Available_Donors")}>Available Donors</div>
        </div>
        
        {/* Buttons with increased marginRight */}
        <div className="Buttons" style={{ gap: '30px', marginRight: '50px', marginTop: '-65px' }}>
          <Button variant="outlined" onClick={() => navigate("/Register_User")} style={{ color: '#861530', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90,
           wordWrap: 'break-word', borderRadius: 5, border: '2px solid #861530',width: 150,
           height: 55, }} >Logout</Button>
        </div>
      </div>
    );
  };

  const Label = () => {
    return (
      <div className="label" style={{ position: 'absolute',right: '0' , left: '120%', top: '40%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20, marginRight: 20, flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginRight: 10 }}>
          <div className="Hospitals" style={{width: 226, height: 48, color: '#861530', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word', marginLeft: -760, marginRight: 20, marginTop: 20 }}>Hospitals</div>
         
        </div>

        {/* Circle with Label */}
        
        <Box />
      </div>

      {/* Rest of the content */}
      <div className="Content" style={{ marginTop: 20, marginLeft: -750, marginRight: 20 }}>
  {/* Cebu Doctors' University Hospital */}
  <div style={{ position: 'relative', textAlign: 'center', marginTop: 20 }} onClick={() => navigate("/CebuDoc_HospitalInformation")}>
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
        top: -135,
        left: '50%',
        transform: 'translate(-50%, 50%)',
        zIndex: 3,
      }}
    >
      Cebu Doctors’ University Hospital
    </div>
  </div>

  {/* Chong hua Hospital Mandaue */}
  <div style={{ position: 'relative', textAlign: 'center', marginTop: 20 }} onClick={() => navigate("/ChongHua_HospitalInformation")}>
  <img
    className="rectangle11"
    src={rectangle11}
    alt="Chong hua Hospital Mandaue"
    style={{
      width: 550,
      height: 140,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
      marginRight: -550,
      marginLeft: -550
    }}
  />
</div>
  <div
    className="ChongHuaHospitalMandaue"
    style={{
      color: 'white',
      fontSize: 14,
      fontFamily: 'Poppins',
      fontWeight: '600',
      lineHeight: 16.10,
      wordWrap: 'break-word',
      position: 'absolute',
      bottom: 0,
      top: 210,
      left: '22%',
      transform: 'translate(-50%, 50%)',
      zIndex: 3,
    }}
  >
    Chong Hua Hospital Mandaue
  </div>
  <div style={{ position: 'relative', textAlign: 'center', marginTop: 20 }} onClick={() => navigate("/VSMMC_HospitalInformation")}>
  <img
    className="rectangle12"
    src={rectangle12}
    alt="Vicente Sotto Memorial Medical Center(VSMMC)"
    style={{
      width: 550,
      height: 140,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 5,
      marginTop: 10,
    }}
  />
</div>
  <div
    className="VicenteSottoMemorialMedicalCenter(VSMMC)"
    style={{
      color: 'white',
      fontSize: 14,
      fontFamily: 'Poppins',
      fontWeight: '600',
      lineHeight: 16.10,
      wordWrap: 'break-word',
      position: 'absolute',
      top: 550, // Adjust the top position as needed
      left: '22%', // Adjust the left position as needed
      transform: 'translate(-50%, 50%)',
      zIndex: 3,
    }}
  >
    Vicente Sotto Memorial Medical Center
    (VSMMC)
    
  </div>


  
</div>
</div>
    

  );
};

export default HospitalDashboard;

import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import { InputAdornment, Input, IconButton } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './BloodBankDashboard.css';


const BloodBankDashboard = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState ('');

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
          <Button color="secondary" onClick={() => navigate("/BloodBankDashboard")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/AvailableDonor")} style={{ color: '#000000', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Available Donors</Button>
          <Button color="secondary" onClick={() => navigate("/BloodRequest")} style={{ color: '#000000', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Blood Request</Button>
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
      <div className="label" style={{ position: 'absolute', left: '170%', top: '60%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
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
        <div className="ellipse" style={{left: 700, top: 100}} />
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
      <div className="Content">

        <div className='blood-bank-hospi'> Blood Bank</div>

       <div className='Hospital-set'>
        <div className='hospital1-group'>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <img className='hospi1-image' onClick={() => navigate('/Subnational')} style={{ width: 600, height: 170, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20 }} alt='Hospi1' src='Subdiv.png' />
              <Button variant="outlined" onClick={() => navigate("/Subnational")} style={{
                WebkitTextStroke: '0.2px #f46262',
                color: '#ffffff',
                fontSize: 22,
                fontFamily: 'sans-serif',
                fontWeight: '600',
                textTransform: 'capitalize',
                letterSpacing: 0.90,
                wordWrap: 'break-word',
                borderColor: 'transparent',
                position: 'absolute',
                bottom: -3,
                left: '63%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                width: '500px'
              }}>
                Subnational Blood Center for Visayas
              </Button>
            </div>
          </div>

          <div className="overlap-hospi">
              
          <div className='hospital2-group'>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <img className='hospi2-image' onClick={() => navigate('/PhiRedCross')} style={{ width: 600, height: 170, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20 }} alt='Hospi2' src='RedCross.png' />
              <Button variant="outlined" onClick={() => navigate("/PhiRedCross")} style={{
                WebkitTextStroke: '0.2px #f46262',
                color: '#ffffff',
                fontSize: 22,
                fontFamily: 'sans-serif',
                fontWeight: '600',
                textTransform: 'capitalize',
                letterSpacing: 0.90,
                wordWrap: 'break-word',
                borderColor: 'transparent',
                position: 'absolute',
                top: 130,
                left: '63%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                width: '500px'
              }}>
                Philippine Red Cross, Cebu Chapter
              </Button>
            </div>
          </div>

          <div className='hospital3-group'>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <img className='hospi3-image' onClick={() => navigate('/VicenteSotto')} style={{ width: 600, height: 170, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20 }} alt='Hospi3' src='VicenteSotto.png' />
              <Button variant="outlined" onClick={() => navigate("/VicenteSotto")} style={{
                WebkitTextStroke: '0.2px #f46262',
                color: '#ffffff',
                fontSize: 22,
                fontFamily: 'sans-serif',
                fontWeight: '600',
                textTransform: 'capitalize',
                letterSpacing: 0.90,
                wordWrap: 'break-word',
                borderColor: 'transparent',
                position: 'absolute',
                top: 95,
                left: '63%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                width: '500px'
              }}>
                Vicente Sotto Medical Memorial Medical Center (VSMMC) Blood Services Unit
              </Button>
            </div>
          </div>

          </div>

          <div className="search-donor" style={{display: 'flex', marginRight: 20, border: '1px solid #c47272', borderRadius: '50px', padding: '5px'   }}>
                <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Search for Blood Banks."
                    disableUnderline={true}
                    style={{
                        width: 400,
                        fontSize: 20,
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                /> 
          </div>

        </div>

      </div>
    </div>
  );
};

export default BloodBankDashboard;

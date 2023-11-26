import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import { InputAdornment, Input, IconButton } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';


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
        <div className="Navigation" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <div className="Home">Home</div>
          <div className="Service">Service</div>
          <div className="About">About</div>
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
      <div className="label" style={{ position: 'absolute', left: '170%', top: '55%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
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
              <img className='hospi1-image' alt='Hospi1' src='Subdiv.png'></img>
          </div>

          <div className="overlap-hospi">
              <div className="overlap-wrapper-hospi">
                <div className="subnational-blood-wrapper-hospi">
                    
                <Button variant="outlined" onClick={() => navigate("/Subnational")}
                    style={{ 
                      WebkitTextStroke: '0.2px #f46262',
                      color: '#ffffff', 
                      fontSize: 22, 
                      fontFamily: 'sans-serif', 
                      fontWeight: '600', 
                      textTransform: 'capitalize', 
                      letterSpacing: 0.90, 
                      wordWrap: 'break-word',  
                      borderColor: 'transparent' , 
                      left: 100, 
                      top: 150
                      }}>
                        Subnational Blood Center for Visayas
                  </Button>

                </div>
            </div>

            <div className='hospital2-group'>
              <img className='hospi2-image' alt='Hospi2' src='RedCross.png' />
          </div>

              <div className="group-1-hospi">
                  <div className="redcross-wrapper-hospi">
                  
                  <Button variant="outlined" onClick={() => navigate("/PhiRedCross")}
                    style={{ 
                      WebkitTextStroke: '0.2px #f46262',
                      color: '#ffffff', 
                      fontSize: 22, 
                      fontFamily: 'sans-serif', 
                      fontWeight: '600', 
                      textTransform: 'capitalize', 
                      letterSpacing: 0.90, 
                      wordWrap: 'break-word',  
                      borderColor: 'transparent' , 
                      left: 100, 
                      top: 150
                      }}>
                        Philippine Red Cross, Cebu Chapter
                  </Button>

                  </div>
              </div>

            <div className='hospital3-group'>
              <img className='hospi3-image' alt='Hospi3' src='VicenteSotto.png' />
          </div>

            <div className="group-2-hospi">
                <div className="vicente-sotto-wrapper-hospi">
                    <Button variant="outlined" onClick={() => navigate("/VicenteSotto")}
                    style={{ 
                      WebkitTextStroke: '0.2px #f46262',
                      color: '#ffffff', 
                      fontSize: 22, 
                      fontFamily: 'sans-serif', 
                      fontWeight: '600', 
                      textTransform: 'capitalize', 
                      letterSpacing: 0.90, 
                      wordWrap: 'break-word',  
                      borderColor: 'transparent' , 
                      left: 70, 
                      top: 170
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

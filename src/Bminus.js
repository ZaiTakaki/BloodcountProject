import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import { Button, InputAdornment, Input, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Bminus = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');


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
          <Button color="secondary" onClick={() => navigate("/BloodBank")} style={{ color: '#000000', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Home</Button>
          <Button color="secondary" onClick={() => navigate("/AvailableDonor")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Available Donors</Button>
          <Button color="secondary" onClick={() => navigate("/BloodRequest")} style={{ color: '#000000', fontSize: 28, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word' }}>Blood Request</Button>
        </div>

        {/* Buttons with increased marginRight */}
        <div className="Buttons" style={{ gap: '30px', marginRight: '50px', marginTop: '5px' }}>
          <Button variant="outlined" onClick={() => navigate("/Login_User")} style={{ color: '#861530', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530' }}>Logout</Button>
        </div>
      </div>
    );
  };

  const Label = () => {
    return (
      <div className="label" style={{ position: 'absolute', left: '80%', top: '55%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
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

  const BloodTypeButtons = ({ boxSize }) => {
    return (
      <div className='blood-type-choices-ad'>
        <div className='blood-line1-ad'>
            <Button variant="outlined" onClick={() => navigate("/Aplus")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530', marginRight: 30 }}>A+</Button>
            <Button variant="outlined" onClick={() => navigate("/Bplus")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530', marginRight: 30 }}>B+</Button>
            <Button variant="outlined" onClick={() => navigate("/ABplus")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530',marginRight: 30 }}>AB+</Button>
            <Button variant="outlined" onClick={() => navigate("/Oplus")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530' }}>O+</Button>
        </div>
        <div className='blood-line2-ad'>
            <Button variant="outlined" onClick={() => navigate("/Aminus")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530', marginRight: 35 }}>A-</Button>
            <Button variant="outlined" onClick={() => navigate("/Bminus")} style={{ color: '#ffffff', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530', marginRight: 40, backgroundColor: '#ef1212'  }}>B-</Button>
            <Button variant="outlined" onClick={() => navigate("/ABminus")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530',marginRight: 30 }}>AB-</Button>
            <Button variant="outlined" onClick={() => navigate("/Ominus")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530' }}>O-</Button>
        </div>
        <div className='blood-line3-ad'>
            <Button variant="outlined" onClick={() => navigate("/AvailableDonor")} style={{ color: '#ef1212', fontSize: 28, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530', marginRight: 35 }}>Show All</Button>
        </div>
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
          {/* Your Service content can go here */}
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Rest of the content */}
      <div className="Content">
        <div className='blood-group-ad'> Blood Group</div>

        <div className='Hospital-set'>
          <div className='h1map-group'>
            <img className='h1map-image' alt='1map' src='Map.png'></img>
          </div>

          <div className="search-donor" style={{ backgroundColor: 'white', display: 'flex', marginRight: 20, border: '1px solid #c47272', borderRadius: '50px', padding: '5px' }}>
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

          {/* Use the BloodTypeButtons component and pass the boxSize prop */}
          <BloodTypeButtons boxSize="200px" />
        </div>


        <div className='box-pink-ad'>
          <div className='box-pink-set1-ad'> B- Blood Type Donors</div>
            <div className='box1-pink-ad'>
              <div className='box1-pink-set1-ad'> John Doe</div>

              <div className='bloodtype-boxes-ad'>
              <div className='blood-type-ad'>
                  <span style={{ color: '#ffffff', fontSize: 20, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>B-</span>
              </div>
           </div>
            </div>

          <div className='box1-pink-detail-set1-ad'>Lahore</div>
          <div className='box1-pink-con-set1-ad'>+936 2345 678 901</div>
          <div className='box1-pink-date-set1-ad'>09/10/23</div>

          <div className='box2-pink-ad'>
            <div className='box1-pink-set1-ad'> Zairen</div>

            <div className='bloodtype-boxes-ad'>
              <div className='blood-type-ad'>
                  <span style={{ color: '#ffffff', fontSize: 20, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>B-</span>
              </div>
           </div>
          </div>

          <div className='box2-pink-detail-set1-ad'>Lahore</div>
          <div className='box2-pink-con-set1-ad'>+936 2345 678 901</div>
          <div className='box2-pink-date-set1-ad'>09/10/23</div>

          <div className='box3-pink-ad'>
            <div className='box1-pink-set1-ad'> John Doe</div>

            <div className='bloodtype-boxes-ad'>
              <div className='blood-type-ad'>
                  <span style={{ color: '#ffffff', fontSize: 20, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>B-</span>
              </div>
           </div>
          </div>

          <div className='box3-pink-detail-set1-ad'>Lahore</div>
          <div className='box3-pink-con-set1-ad'>+936 2345 678 901</div>
          <div className='box3-pink-date-set1-ad'>09/10/23</div>

          <div className='box4-pink-ad'>
            <div className='box1-pink-set1-ad'> John Doe</div>

            <div className='bloodtype-boxes-ad'>
              <div className='blood-type-ad'>
                  <span style={{ color: '#ffffff', fontSize: 20, fontFamily: 'sans-serif', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>B-</span>
              </div>
           </div>
          </div>

          <div className='box4-pink-detail-set1-ad'>Lahore</div>
          <div className='box4-pink-con-set1-ad'>+936 2345 678 901</div>
          <div className='box4-pink-date-set1-ad'>09/10/23</div>

        </div>
        
        </div>
    </div>
  );
};

export default Bminus;
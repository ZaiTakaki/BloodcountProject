import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';

const Label = () => {
  return (
    <div className="label" style={{ position: 'absolute', left: 400 }}>
      <img className="circle-with-blood" src={circleWithBlood} alt="Circle with Blood" style={{ width: '300px', height: '300px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <img className="polygon-above-image" src={require('./Polygon 1.svg').default} alt="Polygon 1" />
      <div className="text-wrapper" style={{ top: '40%', position: 'relative', zIndex: 1 }}>Blood Count</div>
      <div className="subtext-wrapper" style={{ top: '50%', position: 'relative', zIndex: 1 }}>Donate Blood, Save Lives</div>
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

const LoginBloodbankPersonnel = () => {
  const navigate = useNavigate();

  const handleAcceptRequest = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8081/user/insertUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      if (response.status !== 200) {
        throw new Error(`Api returned status code ${response.status}`);
      } else {
        console.log("Sign in Successful!");
        navigate('/Hospital_Dashboard');
      }

    } catch (error) {
      console.log("Error");
    }
  };
 
  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        <div className="LogoAndTitle">
          <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 26, height: 26 }} />
          <div className="Hospital">
            <span style={{ color: '#FF0000', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood</span>
            <span style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}> </span>
            <span style={{ color: '#861530', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Count</span>
          </div>
        </div>
      </div>

      {/* SignUp/Login Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
        <div style={{ textAlign: 'right', marginRight: 10 }}>
          {/* Login */}
          <div className="BloodbankPersonnel" style={{ textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>
            Blood Bank Personnel
          </div>
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Additional TextFields */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20, marginTop: 20 }}>
          <TextField id="outlined-basic-email" label="Username" variant="outlined" fullWidth />
        </div>

        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="outlined-basic-password" label="Password" variant="outlined" type="password" fullWidth />
        </div>

        {/* Sign in Button */}
        <Button
          variant="contained"
          style={{
            width: 419,
            height: 43,
            backgroundColor: '#FFE4E4',
            color: 'black',
            fontSize: 18,
            fontFamily: 'Poppins',
            fontWeight: '600',
            wordWrap: 'break-word',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 44,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex',
            marginLeft: 20,
            marginBottom: 20,
          }}
          onClick={() => {
            const emailInput = document.querySelector("#outlined-basic-email");
            const passwordInput = document.querySelector("#outlined-basic-password");

            if (emailInput && passwordInput) {
              const email = emailInput.value;
              const password = passwordInput.value;

              handleAcceptRequest(email, password);
            } else {
              console.error("Email or password input not found in the DOM");
            }
          }}
        >
          Sign in
        </Button>
      </div>

      {/* Rest of the content */}
      <div className="Content">
        {/* Add your content specific to the Bloodbank Personnel page here */}
      </div>
    </div>
  );
};

export default LoginBloodbankPersonnel;

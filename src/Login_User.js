import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';

const Label = () => {
  return (
    <div className="label" style={{ position: 'absolute', left: 400 }}>
      {/* Replace blooddrop-background with your new image */}
      <img className="circle-with-blood" src={circleWithBlood} alt="Circle with Blood" style={{ width: '300px', height: '300px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

      {/* Rest of your label content */}
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

const LoginUser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Add this line
  const [password, setPassword] = useState("");

  const handleAcceptRequest = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8081/user/insertUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status !== 200) {
        throw new Error(`API returned status code ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData && responseData.userType) {
        const fetchedUserType = responseData.userType;

        // Handle roles based on the fetched user type
        handleRoleRedirect(fetchedUserType);
      } else {
        console.log("Invalid response data format or user type not found in the response!");
        // Handle the case where the response data format is unexpected or user type is not found
      }
    } catch (error) {
      console.log("Error:", error);
      // Handle other error scenarios
    }
  };

  // Handle role-based redirection
  const handleRoleRedirect = (userType) => {
    console.log("User Type:", userType);
    switch (userType) {
      case "USER":
        console.log("Login Successful!");
        navigate("/Service");
        break;
      case "DONOR":
        console.log("Login as Donor!");
        navigate("/Donor_Details");
        break;
      case "HOSPITAL":
        console.log("Login as Hospital!");
        navigate("/Recipient_Dashboard");
        break;
      case "ADMIN":
        console.log("Login as Admin!");
        navigate("/Admin_Homepage");
        break;
      default:
        console.log("Unknown user type or role!");
        // Handle other user types or show an error
    }
  };   

  const handleNavigateToAdmin = () => {
    navigate('/Login_Admin');
  };

  const handleNavigateToRegister = () => {
    navigate('/Register_User');
  };

  const handleNavigateToHospitalPersonnel = () => {
    navigate('/Login_HospitalPersonnel');
  };

  const handleNavigateToBloodbankPersonnel = () => {
    navigate('/Login_BloodbankPersonnel');
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        {/* Logo and Title */}
        <div className="LogoAndTitle">
          {/* Logo */}
          <img className="Header-logo" src={heroLogo} alt="Logo" style={{ width: 26, height: 26 }} />

          {/* Title */}
          <div className="Hospital">
            <span style={{ color: '#FF0000', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Blood</span>
            <span style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}> </span>
            <span style={{ color: '#861530', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>Count</span>
          </div>
        </div>
      </div>

      {/* SignUp/Login Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 900, marginRight: 20, flexDirection: 'column' }}>
        {/* SignUp/Login Section */}
        <div style={{ textAlign: 'right', marginRight: 10 }}> {/* Updated margin-right */}
          {/* Login as Admin */}
          <div onClick={handleNavigateToAdmin} className="LoginAsAdmin" style={{ marginLeft: 350, width: 125, color: '#FF1515', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word', cursor: 'pointer' }}>
            Login as Admin
          </div>

          {/* Login */}
          <div onClick={handleNavigateToRegister} className="Sign up" style={{ width: 199, height: 64, color: 'black', fontSize: 48, fontFamily: 'Poppins-Medium, Helvetica', fontWeight: '500', wordWrap: 'break-word', cursor: 'pointer' }}>
            Sign up
          </div>

          {/* If You Already Have an Account Registered */}
          <div className="IfYouAlreadyHaveAnAccountRegistered" style={{ width: 336.52, height: 22.75, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer' }}>
            If you already have an account registered
          </div>

          {/* You Can Register Here */}
          <div onClick={handleNavigateToRegister} className="YouCanRegisterHere" style={{ width: 312.19, height: 22.75, marginBottom: 20 }}>
            <span style={{ color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>You can </span>
            <span style={{ color: '#FF0000', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word', cursor: 'pointer' }}>Register here!</span>
          </div>
        </div>

        {/* Circle with Label */}
        <Box />
      </div>

      {/* Additional TextFields */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="email" label="Enter your Email" variant="outlined" fullWidth value={email}  onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="Rectangle51" style={{ width: 414.69, height: 56.97, background: 'white', borderRadius: 100, border: '1px #FFC3C3 solid', marginRight: 20, marginBottom: 20 }}>
          <TextField id="password" label="Enter your Password" variant="outlined" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        {/* Forgot Password and Login as Hospital Personnel */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '414.69px', marginRight: 20 }}>
          <div className="ForgotPassword" style={{ width: 150.93, height: 25.70, color: '#FF1515', fontSize: 14, fontFamily: 'Poppins', fontWeight: '700', textDecoration: 'underline', wordWrap: 'break-word', textAlign: 'right', marginBottom: 10, cursor: 'pointer' }}>
            forgot password
          </div>
          <div onClick={handleNavigateToHospitalPersonnel} className="LoginAsHospitalPersonnel" style={{ width: 229, color: '#FF1515', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', textDecoration: 'underline', wordWrap: 'break-word', textAlign: 'right', marginBottom: 5, cursor: 'pointer' }}>
            Login as Hospital personnel
          </div>
        </div>

        {/* Login as Bloodbank Personnel */}
        <div onClick={handleNavigateToBloodbankPersonnel} className="LoginAsBloodbankPersonnel" style={{ width: 245, color: '#FF1515', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', textDecoration: 'underline', wordWrap: 'break-word', textAlign: 'right', marginRight: 200, marginBottom: 20, cursor: 'pointer' }}>
          Login as Bloodbank personnel
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
            marginRight: 20,
            marginTop: 20,
          }}
          onClick={() => {
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            handleAcceptRequest(email, password);
          }}
        >
          Sign in
        </Button>
      </div>

      {/* Rest of the content */}
      <div className="Content">
        {/* Add your content specific to the Register page here */}
      </div>
    </div>
  );
};

export default LoginUser;

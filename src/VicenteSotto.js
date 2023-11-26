import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroLogo from './Image Hero.svg';
import circleWithBlood from './circlewithblood.png';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './Subnational.css';

const bloodType = ['A+','A-','B+','B-','AB+','AB-','O','O-'];

const VicenteSotto = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState ('');

  const [selectedBloodTypes, setSelectedBloodTypes] = useState([]);
  const [openConfirmation, setOpenConfirmation] = useState(false);


  const handleRequestConfirmation = () => {
    setOpenConfirmation(true);
  };

  const handleRequestProceed = () => {

    alert('SUCCESS!');

    navigate('/BloodBank');

    setOpenConfirmation(false);
    navigate("/BloodBank");
  };

  const handleRequestCancel = () => {
    setOpenConfirmation(false);
  };

  const defaultProps = {
    options: bloodType,
    getOptionLabel: (option) => option,
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

       <div className='Hospital-set1'>
          <div className='hospital1-group-set1'>
              <img className='hospi1-image-set1' alt='Hospi1' src='VicenteSotto.png' />
          </div>

          <div className="overlap-hospi-set1">
              <div className="overlap-wrapper-hospi-set1">
                <div className="subnational-blood-wrapper-hospi-set1">
                    
                  <p className="vc-hospi-set1">
                  Vicente Sotto Medical Memorial Medical Center (VSMMC) Blood Services Unit
                  </p>
                </div>
            </div>

          </div>

          <div className='infos-hospi-set1' >
            <div className='blood-bank-hospi-set1'> Information Details</div>
            
            <div className='details-set1'> Address : </div>
            <div className='details-info-set1'> B.Rodriguez Street, Cebu City</div>

            <div className='hours-set1'> Hours : </div>
            <div className='days'>
              <div className='day-info1-set1'> Saturday</div>
              <div className='day-info2-set1'> Sunday</div>
              <div className='day-info3-set1'> Monday</div>
              <div className='day-info4-set1'> Tueasday</div>
              <div className='day-info5-set1'> Wednesday</div>
              <div className='day-info6-set1'> Thursday</div>
              <div className='day-info7-set1'> Friday</div>
            </div>

            <div className='hours'>
            <div className='hour-info1-set1'> Open 24 hours</div>
            <div className='hour-info2-set1'> Open 24 hours</div>
            <div className='hour-info3-set1'> Open 24 hours</div>
            <div className='hour-info4-set1'> Open 24 hours</div>
            <div className='hour-info5-set1'> Open 24 hours</div>
            <div className='hour-info6-set1'> Open 24 hours</div>
            <div className='hour-info7-set1'> Open 24 hours</div>
            </div>

            <div className='phone-set1'> Phone : </div>
            <div className='phone'>
            <div className='phone-info1-set1'>0998-589-3277</div>
            </div>

            <div className='map-set1'> Location Map : </div>
            <div className='ma-group-set1'>
              <img className='map-image' alt='Map' src='VMap.png' />
            </div>
            

          </div>

          <Button variant="outlined" onClick={() => navigate("/Login")} style={{ color: '#000000', fontSize: 23, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px',borderColor: '#ffe4e4',  background: '#ffe4e4', top: 1100, left: 310, height: 50, width:190}}>Proceed</Button>

        </div>

        <div className='box77'></div>

        <div className='box-gray'>
        <div className='box-pgray-set1'> Make a Blood Request</div>
        <div className='request'>
              <div className='request-info1-set1'> Blood Group :</div>
              <div className='request-info2-set1'> Unit:</div>
            </div>
        </div>

        <div className='choose-blood'>
        <Stack spacing={1} sx={{width: 220}}>
            <Autocomplete
              {...defaultProps}
              id="clear-on-escape"
              clearOnEscape
              multiple 
              value={selectedBloodTypes}
              onChange={(event, newValue) => setSelectedBloodTypes(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Choose Blood Types" variant="standard" />
              )}
            />
          </Stack>

          <Button 
          variant="outlined" 
          onClick={handleRequestConfirmation}
          style={{ 
            color: '#ffffff', 
            fontSize: 23, 
            fontFamily: 'Poppins', 
            fontWeight: '800', 
            textTransform: 'capitalize', 
            letterSpacing: 0.90, 
            wordWrap: 'break-word', 
            borderRadius: '10px',
            borderColor: 'transparent',  
            background: '#ef1212', 
            top: 180, 
            left: -80, 
            height: 50, 
            width: 190
          }}
        >
          Request
        </Button>

        {/* Confirmation Dialog */}
        <Dialog
          open={openConfirmation}
          onClose={handleRequestCancel}
        >
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to proceed with the request?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRequestCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleRequestProceed} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        </div>
        
      <div className="enter-unit" style={{display: 'flex', marginRight: 20  }}>
                <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="0"
                    disableUnderline={true}
                    style={{
                        width: 400,
                        fontSize: 30,
                    }}
                /> 
        </div>

      </div>
    </div>
  );
};

export default VicenteSotto;

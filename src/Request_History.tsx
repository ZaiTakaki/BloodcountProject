import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, MenuList, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import heroLogo from './Image Hero.svg';
import polygonImage from './Polygon 1.svg'; 
import circleWithBlood from './circlewithblood.png';
import xImage from './x.png';

const Request_History: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); 
  const [openDialog, setOpenDialog] = useState(false);


  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);

  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRow(null);
  };

  const handleDeleteConfirmed = () => {
    // Perform deletion logic here using the selectedRow
    setOpenDialog(false);
    setSelectedRow(null);
  };

  const handleDeleteButtonClick = () => {
    setOpenDialog(true);
    // Optionally, you can set the selected row here if needed
    // setSelectedRow(row);
  }; 

  const rows = [
    createData('John Doe', 'O+', 'Cebu', '11/11/2023 9:53PM', 20),
    createData('John Doe', 'O+', 'Cebu', '11/11/2023 9:53PM', 24),
  ];  

  function createData(name, bloodGroup, address, mobile, age) {
    return { name, bloodGroup, address, mobile, age };
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFE4E4' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="LogoAndTitle">
              <img
                className="Header-logo"
                src={heroLogo.toString()}
                alt="Logo"
                style={{ width: 26, height: 26 }}
              />
              <div className="Hospital">
                <span
                  style={{
                    color: '#FF0000',
                    fontSize: 20,
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    letterSpacing: 1,
                    wordWrap: 'break-word',
                  }}
                >
                  Blood
                </span>
                <span
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    letterSpacing: 1,
                    wordWrap: 'break-word',
                  }}
                >
                  {' '}
                </span>
                <span
                  style={{
                    color: '#861530',
                    fontSize: 20,
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    letterSpacing: 1,
                    wordWrap: 'break-word',
                  }}
                >
                  Count
                </span>
              </div>
            </div>
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/Register_User")} style={{ color: '#861530', fontSize: 18, fontFamily: 'Poppins', fontWeight: '800', textTransform: 'capitalize', letterSpacing: 0.90, wordWrap: 'break-word', borderRadius: '10px', border: '2px solid #861530', }} >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <MenuList
        sx={{
          width: 260,
          height: 220,
          background: 'rgba(255, 0, 0, 0.75)',
          border: '1px rgba(255, 255, 255, 0.50)',
          display: isMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('/Admin_Homepage')}style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Dashboard</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/Admin_Donor')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Donor</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/Donation_Request')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Blood Requests</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/Recipient')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Active Users</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/Request_History')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Request History</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/Report')}  style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Reports</MenuItem>
      </MenuList>
      
      <div className="Hospital" style={{ width: 396, height: 70, position: 'absolute',  top: 70,  left: 280,  }}><span style={{
      color: '#FF0000',
      fontSize: 40,
      fontFamily: 'Poppins',
      fontWeight: '700',
      letterSpacing: 2,
      wordWrap: 'break-word',
    }}
  >
    Request
  </span>
  <span
    style={{
      color: 'black',
      fontSize: 40,
      fontFamily: 'Poppins',
      fontWeight: '700',
      letterSpacing: 2,
      wordWrap: 'break-word',
    }}
  >
    {' '}
  </span>
  <span
    style={{
      color: '#861530',
      fontSize: 40,
      fontFamily: 'Poppins',
      fontWeight: '700',
      letterSpacing: 2,
      wordWrap: 'break-word',
    }}
  >
    History
  </span>
</div>

      <div className="ellipse" style={{ backgroundColor: '#ff004c1f', borderRadius: '50%', filter: 'blur(200px)', height: '769px', width: '752px', position: 'fixed', bottom: -80, left: 800, zIndex: -1 }} />  
      <img src={polygonImage.toString()} alt="Polygon Image" style={{ width: '200px', height: '200px', borderRadius: '50%', position: 'fixed',  left: 900, bottom: 180, zIndex: -1 }} />       
      <img src={circleWithBlood.toString()} style={{ width: '438px', height: '438px', borderRadius: '50%', position: 'fixed',  left: 1290, bottom: -40, zIndex: -1 }} />

      {isMenuOpen && (
      <><TableContainer component={Paper} style={{ marginTop: -160, marginLeft: 280, marginRight: 20, marginBottom: 20, maxWidth: '50%' }}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#861530' }}>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Donor Name
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Blood Group
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Address
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Date/Time
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Age
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} style={{ padding: '8px 0', justifyContent: 'center', alignItems: 'center', color: '#E8CFCF' }}>
                  <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.bloodGroup}</TableCell>
                  <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.address}</TableCell>
                  <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.mobile}</TableCell>
                  <TableCell style={{ width: 40, textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="Recipient" style={{ textAlign: 'center', color: '#00FF19', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', marginLeft: 700, marginTop: -120 }}>
  Recipient
  <img src={xImage} alt="X Image" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
</div>
<div className="Donor" style={{textAlign: 'center', color: '#00FF19', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word', marginLeft: 690, marginTop: 30}}>
  Donor
  <img src={xImage} alt="X Image" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
</div>
<Button variant="contained" style={{ width: 124, height: 47, padding: 10, background: '#F63636', borderRadius: 70, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', position: 'fixed', right: 20, top: 120 }}>
            <div className="ClearAll" style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Clear All</div>
          </Button>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle id="alert-dialog-title">{"WARNING!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure to delete this row?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                onClick={handleCloseDialog}
                style={{
                  width: 54,
                  height: 18,
                  padding: 10,
                  background: '#FFE4E4',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'inline-flex',
                }}
              >
                NO
              </Button>
              <Button
                variant="contained"
                color="error"
                style={{
                  width: 54,
                  height: 18,
                  padding: 10,
                  background: '#FFE4E4',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'inline-flex',
                }}
                onClick={handleDeleteConfirmed}
                autoFocus
              >
                YES
              </Button>
            </DialogActions>
          </Dialog></>
          )}
          </Box>
  );
};

export default Request_History;



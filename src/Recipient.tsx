import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, MenuList, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import heroLogo from './Image Hero.svg';
import polygonImage from './Polygon 1.svg'; 
import circleWithBlood from './circlewithblood.png';

const Recipient: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); 
  const [openDialog, setOpenDialog] = useState(false);
  const [rows, setRows] = useState([]);



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

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users/getAllUsers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_AUTH_TOKEN`,
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error(`Request failed with status: ${response.status}, Message: ${errorMessage}`);
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
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
        <MenuItem onClick={() => navigate("/Admin_Homepage")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Dashboard</MenuItem>
        <MenuItem onClick={() => navigate("/Admin_Donor")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Donors</MenuItem>
        <MenuItem onClick={() => navigate("/Donation_Request")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Blood Requests</MenuItem>
        <MenuItem onClick={() => navigate("/Recipient")}  style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Active Users</MenuItem>
        <MenuItem onClick={() => navigate("/Request_History")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Request History</MenuItem>
        <MenuItem onClick={() => navigate("/Reports")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Reports</MenuItem>
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
    Recipient
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
    Details
  </span>
</div>

      <div className="ellipse" style={{ backgroundColor: '#ff004c1f', borderRadius: '50%', filter: 'blur(200px)', height: '769px', width: '752px', position: 'fixed', bottom: -80, left: 800, zIndex: -1 }} />  
      <img src={polygonImage.toString()} alt="Polygon Image" style={{ width: '200px', height: '200px', borderRadius: '50%', position: 'fixed',  left: 900, bottom: 180, zIndex: -1 }} />       
      <img src={circleWithBlood.toString()} style={{ width: '438px', height: '438px', borderRadius: '50%', position: 'fixed',  left: 1290, bottom: -40, zIndex: -1 }} />

      <><TableContainer component={Paper} style={{ position: 'fixed', top: 200, left: 280, marginRight: 20, marginBottom: 20, maxWidth: '50%' }}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#861530' }}>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Name
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Gender
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Email
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  User Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.userId} style={{ padding: '8px 0', justifyContent: 'center', alignItems: 'center', color: '#E8CFCF' }}>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.firstName} {row.lastName}</TableCell>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.gender}</TableCell>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.email}</TableCell>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.userType}</TableCell>
                <Button variant="text" style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
                  Edit
                  </Button>
                  <Button variant="contained" style={{ width: 83, height: 47, padding: 10, background: '#F63636', borderRadius: 70, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }} onClick={handleDeleteButtonClick}>
                    <div className="Delete" style={{ textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
                      Delete
                    </div>
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer><Dialog open={openDialog} onClose={handleCloseDialog}>
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
      </Box>
  );
};

export default Recipient;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, MenuList, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import heroLogo from './Image Hero.svg';
import polygonImage from './Polygon 1.svg'; 
import circleWithBlood from './circlewithblood.png';

const Recipient: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [emails, setEmails] = useState<string[]>(() => {
    const storedEmails = localStorage.getItem('emails');
    return storedEmails ? JSON.parse(storedEmails) : [];
  });

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRow(null);
  };

  const handleDeleteConfirmed = async () => {
    try {
      const emailToDelete = selectedRow?.email;

      if (emailToDelete) {
        console.log('Deleting user with email:', emailToDelete);

        const response = await fetch('http://localhost:8081/user/deleteUser', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailToDelete }),
        });

        if (response.ok) {
          console.log('User deleted successfully.');
          setEmails((prevEmails) => {
            const updatedEmails = prevEmails.filter((email) => email !== emailToDelete);
            localStorage.setItem('emails', JSON.stringify(updatedEmails));
            return updatedEmails;
          });
          setSelectedRow(null);
        } else {
          console.error('Error deleting user:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
    } finally {
      setOpenDialog(false);
    }
  };

  const handleDeleteButtonClick = (row) => {
    setOpenDialog(true);
    setSelectedRow(row);
  };

  function createData(email, role) {
    return { email, role };
  }

  const rows = emails.map((email) => createData(email, 'user'));

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
          <Button
            variant="outlined"
            onClick={() => navigate('/Register_User')}
            style={{
              color: '#861530',
              fontSize: 18,
              fontFamily: 'Poppins',
              fontWeight: '800',
              textTransform: 'capitalize',
              letterSpacing: 0.90,
              wordWrap: 'break-word',
              borderRadius: '10px',
              border: '2px solid #861530',
            }}
          >
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
        <MenuItem onClick={() => navigate('/Admin_Homepage')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => navigate('/Admin_Donor')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
          Donor
        </MenuItem>
        <MenuItem onClick={() => navigate('/Donation_Request')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
          Blood Requests
        </MenuItem>
        <MenuItem onClick={() => navigate('/Recipient')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
          Active Users
        </MenuItem>
        <MenuItem onClick={() => navigate('/Request_History')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
          Request History
        </MenuItem>
        <MenuItem onClick={() => navigate('/Reports')} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
          Reports
        </MenuItem>
      </MenuList>

      <div className="Hospital" style={{ width: 396, height: 70, position: 'absolute', top: 70, left: 280, }}>
        <span style={{
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
      <img src={polygonImage.toString()} alt="Polygon Image" style={{ width: '200px', height: '200px', borderRadius: '50%', position: 'fixed', left: 900, bottom: 180, zIndex: -1 }} />
      <img src={circleWithBlood.toString()} style={{ width: '438px', height: '438px', borderRadius: '50%', position: 'fixed', left: 1290, bottom: -40, zIndex: -1 }} />

      {isMenuOpen && (
        <>
          <TableContainer component={Paper} style={{ marginTop: -160, marginLeft: 280, marginRight: 20, marginBottom: 20, maxWidth: '50%' }}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: '#861530' }}>
                  <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                    Email
                  </TableCell>
                  <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                    Role
                  </TableCell>
                  <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.email} style={{ padding: '8px 0', justifyContent: 'center', alignItems: 'center', color: '#E8CFCF' }}>
                    <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.email}</TableCell>
                    <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{row.role}</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>
                      <Button variant="text" style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
                        Edit
                      </Button>
                      <Button variant="contained" style={{ width: 83, height: 47, padding: 10, background: '#F63636', borderRadius: 70, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }} onClick={() => handleDeleteButtonClick(row)}>
                        <div className="Delete" style={{ textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>
                          Delete
                        </div>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
                onClick={() => handleDeleteConfirmed()}
                autoFocus
              >
                YES
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Box>
  );
};

export default Recipient;
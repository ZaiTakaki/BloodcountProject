import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, MenuList, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import heroLogo from './Image Hero.svg';
import polygonImage from './Polygon 1.svg'; 
import circleWithBlood from './circlewithblood.png';

const Admin_Donor: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [donors, setDonors] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); 
  const [openEditDialog, setOpenEditDialog] = useState(false); 
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); 
  const [editedBloodType, setEditedBloodType] = useState('');
  const [editedContactInfo, setEditedContactInfo] = useState('');

  const fetchDonors = async () => {
    try {
      const response = await fetch('http://localhost:8080/donor/getAllDonors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch donors. Status: ${response.status}`);
      }
  
      const data = await response.json();
      setDonors(data);
    } catch (error) {
      console.error('Error fetching donor details:', error.message);
    }
  };

  const [openDialog, setOpenDialog] = useState(false);


  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const handleCloseDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedRow(null);
  };

  const handleDeleteButtonClick = () => {
    setOpenDeleteDialog(true);
    // Optionally, you can set the selected row here if needed
    // setSelectedRow(row);
  };
  const handleDeleteConfirmed = async () => {
    if (selectedRow) {
      const userId = selectedRow.userId;
      try {
        const response = await fetch(`http://localhost:8080/user/deleteUser/${userId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        if (response.ok) {
          // Recipient successfully deleted, fetch updated recipients
          fetchUsers();
          setOpenDeleteDialog(false);
          setSelectedRow(null);
        } else {
          // Handle error
          console.error('Error deleting recipient:', response.statusText);
          // Optionally, you can display an error message or take other actions
        }
      } catch (error) {
        console.error('Error deleting recipient:', error);
        // Optionally, you can display an error message or take other actions
      }
    }
  };

 
  const handleEditButtonClick = (donor: Donor) => {
    setSelectedRow(donor);
    setEditedBloodType(donor.bloodType);
    setEditedContactInfo(donor.contactInfo);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedRow(null);
  };

  const handleSaveEdit = () => {
    if (!selectedRow) {
      console.error('No selected donor for editing.');
      return;
    }

    handleUpdateDonor(selectedRow.donorId, {
      bloodType: editedBloodType,
      contactInfo: editedContactInfo,
    });
  };

  const handleUpdateDonor = async (donorId, updatedDonorDetails) => {
    try {
      const response = await fetch(`http://localhost:8080/donor/updateDonor/${donorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Add the Content-Type header
        },
        body: JSON.stringify(updatedDonorDetails),
        credentials: 'include',
      });

      if (response.ok) {
        // Donor successfully updated, close the dialog and fetch updated donors
        setOpenEditDialog(false);
        fetchDonors();
      } else {
        // Handle error
        console.error('Error updating donor:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating donor:', error);
    }
  };

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

    // Fetch donor details when the component mounts
    const fetchDonors = async () => {
      try {
        const response = await fetch('http://localhost:8080/donor/getAllDonors', { // Replace with your actual endpoint
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
        });  
        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error('Error fetching donor details:', error);
      }
    };

  useEffect(() => {  
    fetchDonors();
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
        <MenuItem onClick={() => navigate("/Admin_Donor")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Donor</MenuItem>
        <MenuItem onClick={() => navigate("/Donation_Request")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Blood Requests</MenuItem>
        <MenuItem onClick={() => navigate("/Recipient")} style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}>Active Users</MenuItem>
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
    Donor
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
                  Donor Name
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Blood Group
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Contact Info
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                  Address
                </TableCell>
                <TableCell style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80 }}>
                    Actions
                  </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {donors.map((donor) => (
                <TableRow key={donor.donorId} style={{ padding: '8px 0', justifyContent: 'center', alignItems: 'center', color: '#E8CFCF' }}>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{`${donor.user.firstName} ${donor.user.lastName}`}</TableCell>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{donor.bloodType}</TableCell>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{donor.contactInfo}</TableCell>
                <TableCell style={{ textAlign: 'center', color: '#861530', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.80, wordWrap: 'break-word' }}>{donor.location}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                      <Button variant="text" style={{ color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 0.90, wordWrap: 'break-word' }}onClick={() => handleEditButtonClick(donor)}>
                        Edit
                      </Button>
                      <Button variant="contained" style={{ width: 83, height: 47, padding: 10, background: '#F63636', borderRadius: 70, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }} onClick={() => handleDeleteButtonClick(donor)}>
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
        
        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Donor</DialogTitle>
        <DialogContent>
          <TextField
            label="Blood Type"
            variant="outlined"
            fullWidth
            value={editedBloodType}
            onChange={(e) => setEditedBloodType(e.target.value)}
            sx={{
              marginTop: 2,
              marginBottom: '12px',
              '& label': { color: '#FF0000'},
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF0000',
                },
              },
            }}
          />
          <TextField
            label="Contact Info"
            variant="outlined"
            fullWidth
            value={editedContactInfo}
            onChange={(e) => setEditedContactInfo(e.target.value)}
            sx={{
              marginBottom: '12px',
              '& label': { color: '#FF0000'},
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#FF0000',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={() => handleSaveEdit(selectedRow)}>Save</Button>
        </DialogActions>
      </Dialog>

        <Dialog open={openDeleteDialog} onClose={handleCloseDialog}>

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

export default Admin_Donor;



const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

// Enable CORS for all routes
app.use(cors({ origin: '*', credentials: true }));

// Your existing route handling code
app.post('/user/getAllUsers', (req, res) => {
  // Set CORS headers explicitly
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  // Your route logic here
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Example server code
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8081;

app.use(bodyParser.json());

// Example user data (replace this with your actual user data or database connection)
const users = [
  { id: 1, email: 'user@example.com', password: 'password123' },
  // Add more users as needed
];

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;

  // Simulate authentication (replace this with your actual authentication logic)
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Authentication successful
    res.status(200).json({ success: true, message: 'Authentication successful' });
  } else {
    // Authentication failed
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

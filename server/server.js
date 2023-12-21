// server.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Your user data storage (replace with a database in a real-world scenario)
const users = [];

// Secret key for JWT (replace with a secure key)
const secretKey = 'your_secret_key';

// Register endpoint
app.post('/user/insertUser', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // Perform user registration logic
  // ...

  // For simplicity, assume registration is successful
  const userType = 'USER'; // Assign the user type based on your logic

  // Create a JWT token
  const token = jwt.sign({ userType, email }, secretKey, { expiresIn: '1h' });

  res.json({ token, userType });
});

// Login endpoint
app.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  // Perform user login logic
  // ...

  // For simplicity, assume login is successful
  const userType = 'USER'; // Retrieve the user type from your storage

  // Create a JWT token
  const token = jwt.sign({ userType, email }, secretKey, { expiresIn: '1h' });

  res.json({ token, userType });
});

// Protected route example
app.get('/protected', (req, res) => {
  // Middleware to check the JWT token
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const { userType, email } = decoded;

    // Use the userType to check authorization
    // Perform authorization logic based on the user type
    // ...

    res.json({ message: 'Access granted', userType, email });
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

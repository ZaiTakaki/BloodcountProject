const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your client's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Example secret key for JWT (replace this with your actual secret)
const JWT_SECRET_KEY = 'your-secret-key';

// Middleware to check for authentication using JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};

// Protected route requiring authentication
app.get('/users/getAllUsers', authenticateJWT, (req, res) => {
  // Your logic here, user is available as req.user
  res.json({ message: 'Authenticated response' });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

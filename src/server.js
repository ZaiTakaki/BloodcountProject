const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your client's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Your routes go here

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

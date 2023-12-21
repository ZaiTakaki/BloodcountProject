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

// Example server-side code to update user role to ADMIN
app.post("/admin/insertAdmin", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Authenticate user, validate credentials, and fetch the user from the database

    // Assuming you have a user model and are using Mongoose
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { userType: "ADMIN" },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

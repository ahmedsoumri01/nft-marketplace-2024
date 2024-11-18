const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Set the port dynamically
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Express on Vercel"));

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 

module.exports = app;
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
// connectDB();
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
connectDB();

app.get('/', (req, res) => {
  res.send('JWT Auth API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
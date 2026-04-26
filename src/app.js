const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running 🚀' });
});

const authRoutes = require('./routes/auth.routes');

app.use('/api/auth', authRoutes);

module.exports = app;
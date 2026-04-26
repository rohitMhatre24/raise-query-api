const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Routes
const authRoutes = require('./routes/auth.routes');
const applicationRoutes = require('./routes/application.routes');
const errorHandler = require('./middleware/error.middleware');

const app = express();


// 🛡️ GLOBAL MIDDLEWARES

// Enable CORS (allow frontend to call backend)
app.use(cors());

// Security headers
app.use(helmet());

// Logging (shows API calls in console)
app.use(morgan('dev'));

// Parse JSON request body
app.use(express.json());


// 🛣️ ROUTES

app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);


// ❤️ HEALTH CHECK (very important in production)
app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'Server is running 🚀',
  });
});


// ❌ 404 HANDLER (route not found)
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.use(errorHandler);
module.exports = app;
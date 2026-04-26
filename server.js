require('dotenv').config();
const app = require('./src/app');
const { connectDB } = require('./src/config/db');

connectDB(); // Connect to the database before starting the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




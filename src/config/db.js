const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL Connected');
    // 🔥 Show current database
    const [dbResult] = await sequelize.query("SELECT DATABASE() as db");
    console.log("📦 Connected DB:", dbResult[0].db);

    // 🔥 Show all tables
    const [tables] = await sequelize.query("SHOW TABLES");

    console.log("📋 Tables in DB:");

    tables.forEach((table) => {
      console.log(Object.values(table)[0]);
    });
  } catch (error) {
    console.error('❌ DB Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
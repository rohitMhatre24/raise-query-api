const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Application = sequelize.define('application', {
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  subject: {
    type: DataTypes.STRING,
  },

  description: {
    type: DataTypes.TEXT,
  },

  status: {
    type: DataTypes.ENUM('PENDING', 'APPROVED', 'REJECTED'),
    defaultValue: 'PENDING',
  },
});

module.exports = Application;
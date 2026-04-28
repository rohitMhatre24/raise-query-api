const User = require("./user.model");
const Application = require("./application.model");

// 🔥 DEFINE RELATIONSHIP
Application.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Application, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Application,
};
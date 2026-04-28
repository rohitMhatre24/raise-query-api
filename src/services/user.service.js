const { User } = require("../models");
const bcrypt = require("bcryptjs");

// 🔥 GET ALL USERS
exports.getAllUsers = async () => {
  return await User.findAll({
    attributes: ["id", "name", "email", "role", "createdAt"],
    order: [["createdAt", "DESC"]],
  });
};

// 🔥 CREATE USER (ADMIN)
exports.createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    role: data.role || "USER",
  });
};

// 🔥 USER COUNT
exports.getUserCount = async () => {
  return await User.count();
};
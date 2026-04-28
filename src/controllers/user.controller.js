const service = require("../services/user.service");

// GET USERS
exports.getAll = async (req, res) => {
  const users = await service.getAllUsers();

  res.json({
    success: true,
    data: users,
  });
};

// CREATE USER
exports.create = async (req, res) => {
  const user = await service.createUser(req.body);

  res.json({
    success: true,
    data: user,
  });
};

// USER COUNT
exports.getCount = async (req, res) => {
  const count = await service.getUserCount();

  res.json({
    success: true,
    data: { total: count },
  });
};
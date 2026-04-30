const service = require('../services/application.service');
const asyncHandler = require('../utils/asyncHandler');

// create
exports.create = asyncHandler(async (req, res) => {
  const data = await service.createApplication(req.user.id, req.body);

  res.status(201).json({
    success: true,
    data,
  });
});

// get my
exports.getMy = asyncHandler(async (req, res) => {
  const data = await service.getUserApplications(req.user.id);

  res.json({
    success: true,
    data,
  });
});

// dashboard
exports.dashboard = asyncHandler(async (req, res) => {
  const data = await service.getDashboardStats(req.user.id);

  res.json({
    success: true,
    data,
  });
});

// admin update
exports.updateStatus = asyncHandler(async (req, res) => {
  const data = await service.updateStatus(
    req.params.id,
    req.body.status
  );

  res.json({
    success: true,
    data,
  });
});

// 🟢 ADMIN: GET ALL APPLICATIONS
exports.getAll = async (req, res) => {
  try {
    const data = await service.getAllApplications(req.query);
    
    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("GET /applications ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// 🟢 ADMIN: DASHBOARD STATS
exports.getAdminDashboard = async (req, res) => {
  try {
    const data = await service.getAdminDashboardStats();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const express = require('express');
const router = express.Router();

const controller = require('../controllers/application.controller');
const { verifyToken, checkRole } = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');
const { createApplicationSchema } = require('../validators/application.validator');


// CREATE (with validation)
router.post(
  '/',
  verifyToken,
  validate(createApplicationSchema),
  controller.create
);

// GET MY
router.get('/my', verifyToken, controller.getMy);

// DASHBOARD
router.get('/dashboard', verifyToken, controller.dashboard);

// ADMIN UPDATE
router.patch(
  '/:id/status',
  verifyToken,
  checkRole('ADMIN'),
  controller.updateStatus
);

// ✅ Get all applications (admin table)
router.get(
  '/',
  verifyToken,
  checkRole('ADMIN'),
  controller.getAll
);

// ✅ Get admin dashboard stats
router.get(
  '/admin/dashboard',
  verifyToken,
  checkRole('ADMIN'),
  controller.getAdminDashboard
);

module.exports = router;
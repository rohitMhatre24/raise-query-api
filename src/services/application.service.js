const Application = require('../models/application.model');


// 🟢 CREATE APPLICATION
exports.createApplication = async (userId, data) => {
  const application = await Application.create({
    user_id: userId,
    subject: data.subject,
    description: data.description,
  });

  return application;
};


// 🟢 GET USER APPLICATIONS (THIS IS YOUR CODE)
exports.getUserApplications = async (userId) => {
  return await Application.findAll({
    where: { user_id: userId },
    order: [['createdAt', 'DESC']],
  });
};


// 🟢 DASHBOARD STATS
exports.getDashboardStats = async (userId) => {

  const total = await Application.count({ where: { user_id: userId } });

  const pending = await Application.count({
    where: { user_id: userId, status: 'PENDING' },
  });

  const approved = await Application.count({
    where: { user_id: userId, status: 'APPROVED' },
  });

  const rejected = await Application.count({
    where: { user_id: userId, status: 'REJECTED' },
  });

  return { total, pending, approved, rejected };
};


// 🟢 ADMIN UPDATE STATUS
exports.updateStatus = async (id, status) => {

  const app = await Application.findByPk(id);

  if (!app) throw new Error('Application not found');

  app.status = status;

  await app.save();

  return app;
};
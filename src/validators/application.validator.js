const Joi = require('joi');

exports.createApplicationSchema = Joi.object({
  subject: Joi.string().min(3).required(),
  description: Joi.string().min(5).required(),
});
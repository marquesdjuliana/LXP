const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(8).required(),
  role: Joi.string().valid('student', 'professor').required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const courseSchema = Joi.object({
  title: Joi.string().required(),
  duration: Joi.string().required(),
  professor_id: Joi.number().integer().required(),
});

module.exports = {
  userSchema,
  courseSchema,
};
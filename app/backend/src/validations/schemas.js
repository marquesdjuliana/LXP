const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(8).required(),
  role: Joi.string().valid('student', 'professor').required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  userSchema,
};
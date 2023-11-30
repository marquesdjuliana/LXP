const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(8),
  role: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().min(6),
});

module.exports = {
  userSchema,
};
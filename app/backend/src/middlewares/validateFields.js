const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { verifyFields } = require('../validations/verifyFields');
const { userSchema } = require('../validations/schemas')

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(mapStatusHTTP('BAD_REQUEST'))
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateUser = (req, res, next) => {
  const user = req.body;
  const requiredFields = ['name', 'role','email', 'password'];

  const areAllFieldsPresent = verifyFields(requiredFields, user);
  if (!areAllFieldsPresent) {
    const errorMessage = 'Some required fields are missing';
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: errorMessage });
  }

  const { error } = userSchema.validate(user);
  if (error) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: error.message });
  }

  next();
};

module.exports = {
  validateLogin,
  validateUser,
};
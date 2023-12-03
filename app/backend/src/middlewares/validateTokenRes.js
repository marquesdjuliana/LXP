const { decodeToken } = require('../utils/authenticateToken');

const validateTokenRes = async(req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const payload = decodeToken(authorization);

    res.locals.user = payload;
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next()
};

module.exports = validateTokenRes;
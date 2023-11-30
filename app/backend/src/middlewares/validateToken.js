const { decodeToken } = require('../utils/authenticateToken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
 decodeToken(authorization);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = decodeToken(authorization);
  next();
};

module.exports = validateToken;
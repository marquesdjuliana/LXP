const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) => {
  const authToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return authToken;
};

const decodeToken = (authHeader) => {
  const extractedToken = authHeader.split(' ')[1];
  const decodedToken = jwt.verify(extractedToken, JWT_SECRET);
  return decodedToken;
};

module.exports = {
  generateToken,
  decodeToken,
};
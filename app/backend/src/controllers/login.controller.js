const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const verifyUser = async (req, res) => {
  const { body } = req;
  const { status, data } = await loginService.verifyUser(body);
  return res.status(mapStatusHTTP(status)).json(data);
};


const getUserRole = async (req, res) => {
  const { email }  = res.locals.user;

  const { status, data } = await  loginService.getUserRole(email);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  verifyUser,
  getUserRole,
};
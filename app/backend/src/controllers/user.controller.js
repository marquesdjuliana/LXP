const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
 
const listAllUsers = async (_req, res) => {
  const { status, data } = await userService.listAllUsers();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  listAllUsers
}
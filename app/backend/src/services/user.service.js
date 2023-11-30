const { User} = require('../models');

const listAllUsers = async () => {
  const users = await User.findAll();
  return { status: 'SUCCESSFUL', data: users };
};

module.exports = {
  listAllUsers,
}
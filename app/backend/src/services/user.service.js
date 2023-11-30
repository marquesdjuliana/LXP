const { User } = require('../models');
const { generateToken } = require('../utils/authenticateToken');

const listAllUsers = async () => {
  const users = await User.findAll();
  return { status: 'SUCCESSFUL', data: users };
};

const createUser = async (newUserDetails) => {
  const existingUser = await User.findOne({ where: { email: newUserDetails.email } });
  
  if (existingUser) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create(newUserDetails);
  
  if (newUser) {
      const token = generateToken({ id: newUser.dataValues.id, email: newUserDetails.email });
    return { status: 'CREATED', data: { token } };
  }
};

module.exports = {
  listAllUsers,
  createUser,
}
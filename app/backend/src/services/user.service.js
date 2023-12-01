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

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  return { status: 'SUCCESSFUL', data: user };
};

const updateUser = async (id, updatedUserInfo) => {
  const existingUser = await User.findByPk(id);

  if (!existingUser) {
    return { status: 'NOT_FOUND', data: { message: 'User not found' } };
  }

  try {
    await existingUser.update(updatedUserInfo);
    return { status: 'SUCCESSFUL', data: { message: 'User updated successfully' } };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: 'Failed to update user information' } };
  }
};

module.exports = {
  listAllUsers,
  createUser,
  getUserById,
  updateUser,
}
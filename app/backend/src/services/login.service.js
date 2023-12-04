const { User } = require('../models');
const { generateToken } = require('../utils/authenticateToken');

const verifyUser = async (params) => {
  const { email, password } = params;
  const user = await User.findOne({ where: { email } });
  
  if (!user || password !== user.password) { 
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
}
 const token = generateToken({ id: user.id, email });
  return { status: 'SUCCESSFUL', data: { token } };
};

const getUserRole = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'User not found' } };
  }
  return { status: 'SUCCESSFUL', data: { role: user.role, userId: user.id } };
};

module.exports = {
  verifyUser,
  getUserRole,
};
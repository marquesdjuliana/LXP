const route = require('express').Router();
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares/validateFields');

route.post('/', validateLogin, loginController.verifyUser);

module.exports = route;

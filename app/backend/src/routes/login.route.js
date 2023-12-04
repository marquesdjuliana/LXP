const route = require('express').Router();
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares/validateFields');
const validateTokenRes = require('../middlewares/validateTokenRes');


route.post('/', validateLogin, loginController.verifyUser);
route.get('/role', validateTokenRes, loginController.getUserRole);

module.exports = route;

const route = require('express').Router();
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares/validateFields');
const validateTokenRes = require('../middlewares/validateTokenRes');
// const validateToken = require('../middlewares/validateToken');


route.post('/', validateLogin, loginController.verifyUser);
route.get('/role', validateTokenRes, loginController.getUserRole);
// route.get('/role/:id', validateToken, loginController.getUserRole);

module.exports = route;

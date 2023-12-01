const route = require('express').Router();
const {userController} = require('../controllers');
const { validateUser } = require('../middlewares/validateFields');
const validateToken = require('../middlewares/validateToken');


route.get('/', validateToken, userController.listAllUsers);
route.post('/', validateUser, userController.createUser);
route.get('/:id', validateToken, userController.getUserById);


module.exports = route;
const route = require('express').Router();
const {userController} = require('../controllers');
const { validateUser } = require('../middlewares/validateFields');
const validateToken = require('../middlewares/validateToken');


route.get('/', validateToken, userController.listAllUsers);
route.post('/', validateUser, userController.createUser);
route.get('/:id', validateToken, userController.getUserById);
route.put('/:id', validateToken, validateUser, userController.updateUser);
route.delete('/:id', validateToken, userController.deleteUserById);


module.exports = route;
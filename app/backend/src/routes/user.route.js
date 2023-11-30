const route = require('express').Router();
const {userController} = require('../controllers');

route.get('/', userController.listAllUsers);

module.exports = route;
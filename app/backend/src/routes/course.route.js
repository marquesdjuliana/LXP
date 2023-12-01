const route = require('express').Router();
const {courseController} = require('../controllers');



route.get('/', courseController.listAllCourses);

module.exports = route;
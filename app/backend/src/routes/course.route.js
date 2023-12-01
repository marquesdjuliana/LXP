const route = require('express').Router();
const {courseController} = require('../controllers');



route.get('/', courseController.listAllCourses);
route.get('/:id', courseController.getCourseById);

module.exports = route;
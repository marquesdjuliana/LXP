const route = require('express').Router();
const { courseController } = require('../controllers');
const { validateCourse } = require('../middlewares/validateFields')



route.get('/', courseController.listAllCourses);
route.get('/:id', courseController.getCourseById);
route.post('/', validateCourse, courseController.createCourse);

module.exports = route;
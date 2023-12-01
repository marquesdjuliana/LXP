const route = require('express').Router();
const { courseController } = require('../controllers');
const { validateCourse, validateCourseId } = require('../middlewares/validateFields')



route.get('/', courseController.listAllCourses);
route.get('/:id', courseController.getCourseById);
route.post('/', validateCourse, courseController.createCourse);
route.put('/:id', validateCourse, courseController.updateCourseById);
route.delete('/:id', courseController.deleteCourseById);
route.get('/:id/questions', validateCourseId, courseController.getAllQuestionsByCourseId);

module.exports = route;
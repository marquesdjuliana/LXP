const route = require('express').Router();
const { courseController } = require('../controllers');
const { validateCourse, validateCourseId, validateQuestion } = require('../middlewares/validateFields');
const validateToken = require('../middlewares/validateToken');



// route.get('/', courseController.listAllCourses);
route.get('/', courseController.getCourses);

route.get('/:id', courseController.getCourseById);
route.get('/:id/courses-professor', validateToken, courseController.getCoursesByProfessorId);

route.post('/', validateCourse, courseController.createCourse);
route.put('/:id', validateCourse, courseController.updateCourseById);
route.delete('/:id', courseController.deleteCourseById);

route.get('/:id/questions', validateCourseId, courseController.getAllQuestionsByCourseId);
route.post('/:id/questions', validateCourseId, validateQuestion, courseController.createQuestionForCourse);

route.get('/:id/questions/:questionId/answers', validateCourseId, courseController.getAllAnswersForQuestion);
route.post('/:id/questions/:questionId/answers', validateCourseId, courseController.createAnswerForQuestion);

module.exports = route;
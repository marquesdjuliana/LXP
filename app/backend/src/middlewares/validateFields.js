const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { verifyFields } = require('../validations/verifyFields');
const { userSchema, courseSchema } = require('../validations/schemas')
const { Course } = require('../models')

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(mapStatusHTTP('BAD_REQUEST'))
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateUser = (req, res, next) => {
  const user = req.body;
  const requiredFields = ['name', 'role','email', 'password'];

  const areAllFieldsPresent = verifyFields(requiredFields, user);
  if (!areAllFieldsPresent) {
    const errorMessage = 'Some required fields are missing';
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: errorMessage });
  }

  const { error } = userSchema.validate(user);
  if (error) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: error.message });
  }

  next();
};

const validateCourse = (req, res, next) => {
  const course = req.body;
  const requiredFields = ['title', 'duration', 'professor_id'];

  const areAllFieldsPresent = verifyFields(requiredFields, course);
  if (!areAllFieldsPresent) {
    const errorMessage = 'Some required fields are missing';
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: errorMessage });
  }

  const { error } = courseSchema.validate(course);
  if (error) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: error.message });
  }

  next();
};

const validateCourseId = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: 'Course ID is missing' });
  }

  const course = await Course.findByPk(id);
  if (!course) {
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Course not found' });
  }

  next();
};

const validateQuestion = (req, res, next) => {
  const question = req.body;
  const requiredFields = ['user_id', 'question_text'];
  
  const areAllFieldsPresent = verifyFields(requiredFields, question);
  if (!areAllFieldsPresent) {
    const errorMessage = 'Some required fields are missing for the question';
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: errorMessage });
  }


  next();
};


module.exports = {
  validateLogin,
  validateUser,
  validateCourse,
  validateCourseId,
  validateQuestion,
};
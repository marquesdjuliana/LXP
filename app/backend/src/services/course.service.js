const { Course, Question, Answer } = require('../models');

const getCourses = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize;
  const courses = await Course.findAll({
    offset,
    limit: parseInt(pageSize),
  });
  return { status: 'SUCCESSFUL', data: courses };
};


const getCourseById = async (id) => {

  const course = await Course.findByPk(id);

  if (!course) {
    return { status: 'NOT_FOUND', data: { message: 'Course not found' } };
  }

  return { status: 'SUCCESSFUL', data: course };
};

const createCourse = async (courseDetails) => {
  try {
    const newCourse = await Course.create(courseDetails);
    return { status: 'CREATED', data: newCourse };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
};

const updateCourseById = async (id, updatedCourseDetails) => {
  try {
    const [updatedRowsCount] = await Course.update(updatedCourseDetails, {
      where: { id },
    });

    if (updatedRowsCount === 0) {
      return { status: 'NOT_FOUND', data: { message: 'Course not found' } };
    }

    const updatedCourse = await Course.findByPk(id);

    return { status: 'SUCCESSFUL', data: updatedCourse };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
};

const deleteCourseById = async (id) => {
  try {
    const deletedRowCount = await Course.destroy({
      where: { id },
    });

    if (deletedRowCount === 0) {
      return { status: 'NOT_FOUND', data: { message: 'Course not found' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'Course deleted successfully' } };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
};

const getAllQuestionsByCourseId = async (courseId) => {
  const course = await Course.findByPk(courseId);
  
  if (!course) {
    return { status: 'NOT_FOUND', data: { message: 'Course not found' } };
  }

  const questions = await Question.findAll({ where: { course_id: courseId } });
  return { status: 'SUCCESSFUL', data: questions };
};

const createQuestionForCourse = async (courseId, questionDetails) => {
  try {
    questionDetails.course_id = courseId;
    
    const newQuestion = await Question.create(questionDetails);
    return { status: 'CREATED', data: newQuestion };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
};

const getAllAnswersForQuestion = async (questionId) => {
  const answers = await Answer.findAll({
    where: {
      question_id: questionId
    }
  });

  return { status: 'SUCCESSFUL', data: answers };
};

const createAnswerForQuestion = async (courseId, questionId, answerDetails) => {
  try {
    answerDetails.course_id = courseId;
    answerDetails.question_id = questionId;

    const newAnswer = await Answer.create(answerDetails);
    return { status: 'CREATED', data: newAnswer };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
};

const getCoursesByProfessorId = async (professorId) => {
  try {
    const professorCourses = await Course.findAll({ where: { professor_id: professorId } });
    return { status: 'SUCCESSFUL', data: professorCourses };
  } catch (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
};

module.exports = {
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
  getAllQuestionsByCourseId,
  createQuestionForCourse,
  getAllAnswersForQuestion,
  createAnswerForQuestion,
  getCoursesByProfessorId,
  getCourses
}
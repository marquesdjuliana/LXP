const { Course, Question, Answer } = require('../models');

const listAllCourses = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize;
  const courses = await Course.findAll({
    offset,
    limit: parseInt(pageSize),
  });
  return { status: 'SUCCESSFUL', data: courses };
};

const getCourseById = async (id) => {
  // const course = await Course.findByPk(id, {
  //   include: [
  //     {
  //       model: Question,
  //       include: [Answer],
  //     },
  //   ],
  // });

  const course = await Course.findByPk(id);
  
  if (!course) {
    return { status: 'NOT_FOUND', data: { message: 'Course not found' } };
  }

  return { status: 'SUCCESSFUL', data: course };
};

module.exports = {
  listAllCourses,
  getCourseById,
}
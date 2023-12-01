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

module.exports = {
  listAllCourses,
  getCourseById,
  createCourse,
  updateCourseById,
}
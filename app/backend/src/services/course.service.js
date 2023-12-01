const { Course } = require('../models');

const listAllCourses = async () => {
  const courses = await Course.findAll();
  return { status: 'SUCCESSFUL', data: courses };
};

module.exports = {
  listAllCourses,
}
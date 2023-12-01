const { Course } = require('../models');

const listAllCourses = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize;
  const courses = await Course.findAll({
    offset,
    limit: parseInt(pageSize),
  });
  return { status: 'SUCCESSFUL', data: courses };
};

module.exports = {
  listAllCourses,
}
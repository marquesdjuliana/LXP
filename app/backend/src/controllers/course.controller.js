const { courseService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
 

const listAllCourses = async (req, res) => {
  const { page, pageSize } = req.query;

  const { status, data } = await courseService.listAllCourses(page, pageSize);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getCourseById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await courseService.getCourseById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};


module.exports = {
  listAllCourses,
  getCourseById,  
}

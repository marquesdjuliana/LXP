const { courseService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
 
const listAllCourses = async (_req, res) => {
  const { status, data } = await courseService.listAllCourses();
  return res.status(mapStatusHTTP(status)).json(data);
};



module.exports = {
  listAllCourses,
}
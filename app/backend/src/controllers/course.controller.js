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


const createCourse = async (req, res) => {
  const { body } = req;
  const { status, data } = await courseService.createCourse(body);
  return res.status(mapStatusHTTP(status)).json(data);
}

const updateCourseById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const { status, data } = await courseService.updateCourseById(id, body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteCourseById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await courseService.deleteCourseById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAllQuestionsByCourseId = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await courseService.getAllQuestionsByCourseId(id);
  return res.status(mapStatusHTTP(status)).json(data);
};


module.exports = {
  listAllCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
  getAllQuestionsByCourseId  
}

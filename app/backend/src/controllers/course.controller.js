const { courseService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
 

const listAllCourses = async (req, res) => {
  const { page, pageSize } = req.query;

  const { status, data } = await courseService.listAllCourses(page, pageSize);
  return res.status(mapStatusHTTP(status)).json(data);
};
//TESTE:
const getCourses = async (req, res) => {
  const { page, pageSize } = req.query;

  const { status, data } = await courseService.getCourses(page, pageSize);
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

const createQuestionForCourse = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const { status, data } = await courseService.createQuestionForCourse(id, body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAllAnswersForQuestion = async (req, res) => {
  const { questionId } = req.params;

  try {
    const result = await courseService.getAllAnswersForQuestion(questionId);
    if (result.status === 'NOT_FOUND') {
      return res.status(404).json(result.data);
    }
    return res.status(200).json(result.data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createAnswerForQuestion = async (req, res) => {
  const { id, questionId } = req.params;
  const { body } = req;

  const { status, data } = await courseService.createAnswerForQuestion(id, questionId, body);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getCoursesByProfessorId = async (req, res) => {
  const { id: professorId } = req.params;

  try {
    const professorCourses = await courseService.getCoursesByProfessorId(professorId);
    return res.status(mapStatusHTTP(professorCourses.status)).json(professorCourses.data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  listAllCourses,
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

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRole = async (endpoint) => {
  const { data } = await api.get(endpoint);
  console.log(data);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  console.log(data);
  return data;
};


export const requestCourses = async (page = 1, pageSize = 10) => {
  try {
    const response = await api.get(`/courses?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch courses');
  }
};

export const requestCoursesForProfessor = async (professorId) => {
  try {
    const { data } = await api.get(`/courses/${professorId}/courses-professor`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Failed to fetch courses for professor');
  }
};;

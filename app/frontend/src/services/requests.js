import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRole = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

// export const makeRequest = async (method, endpoint, body = null) => {
//   try {
//     const config = {
//       method,
//       url: endpoint,
//       data: body,
//     };

//     const { data } = await api.request(config);
//     return data;
//   } catch (error) {
//     throw new Error(error.response.data.message || 'Something went wrong');
//   }
// };

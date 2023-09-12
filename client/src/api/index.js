import axios from 'axios';

const API = axios.create({baseURL: '/api'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const getPrograms = () => API.get(`/program/all`);
export const getProgramsByUser = (userId) => API.get(`/program/user/${userId}`);
export const getProgramsById = (programId) => API.get(`/program/id/${programId}`);
export const createProgram = (program) => API.post(`/program/create`, program);
export const deleteProgram = (programId) => API.delete(`/program/${programId}`);
export const updateProgram = (programId, program) => API.patch(`/program/${programId}`, program);

export const getExercises = (programId) => API.get(`/exercise/${programId}`);
export const createExercise = (exercise) => API.post(`/exercise/create`, exercise);
export const deleteExercise = (exerciseId) => API.delete(`/exercise/${exerciseId}`);
export const updateExercise = (exerciseId, exercise) => API.patch(`/exercise/${exerciseId}`, exercise);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
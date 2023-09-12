import * as api from '../../api';

export const getPrograms = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getPrograms(userId);
    dispatch({type: 'GET_PROGRAMS', payload: data});
  } catch (error) {
    console.log(error);
  }
}

export const createProgram = (program) => async (dispatch) => {
  try {
    const { data } = await api.createProgram(program);
    dispatch({type: 'CREATE_PROGRAM', payload: data});
  } catch (error) {
    console.log(error);
  }
}

export const deleteProgram = (programId) => async (dispatch) => {
  try {
    const { data } = await api.deleteProgram(programId);
    dispatch({type: 'DELETE_PROGRAM', payload: programId});
  } catch (error) {
    console.log(error);
  }
}
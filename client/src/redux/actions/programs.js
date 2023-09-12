import * as api from '../../api';

export const getProgramsByUser = (creator) => async (dispatch) => {
  try {
    const { data } = await api.getProgramsByUser(creator);
    dispatch({type: 'GET_PROGRAMS', payload: data});
  } catch (error) {
    console.log(error);
  }
}

export const getPrograms = () => async (dispatch) => {
  try {
    const { data } = await api.getPrograms();
    dispatch({type: 'GET_PROGRAMS', payload: data});
  } catch (error) {
    console.log(error);
  }
}

export const getProgramsById = (programId) => async (dispatch) => {
  try {
    const { data } = await api.getProgramsById(programId);
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

export const updateProgram = (programId, program) => async (dispatch) => {
  try {
    const { data } = await api.updateProgram(programId, program);
    dispatch({type: 'UPDATE_PROGRAM', payload: data});
  } catch (error) {
    console.log(error);
  }
}
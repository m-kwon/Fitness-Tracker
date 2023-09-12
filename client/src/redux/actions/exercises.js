import * as api from '../../api';

export const getExercises = (programId) => async (dispatch) => {
  try {
    const { data } = await api.getExercises(programId);
    dispatch({type: 'GET_EXERCISES', payload: data});
  } catch (error) {
    console.log(error);
  }
}

export const createExercise = (exercise) => async (dispatch) => {
  try {
    const { data } = await api.createExercise(exercise);
    dispatch({type: 'CREATE_EXERCISE', payload: data});
  } catch (error) {
    console.log(error);
  }
}

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    const { data } = await api.deleteExercise(exerciseId);
    dispatch({type: 'DELETE_EXERCISE', payload: exerciseId});
  } catch (error) {
    console.log(error);
  }
}
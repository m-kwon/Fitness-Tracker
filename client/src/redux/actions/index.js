export const getPrograms = (programs) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_PROGRAMS',
      payload: programs
    })
  }
};

export const setUser = (userId) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_USER',
      payload: userId
    })
  }
};
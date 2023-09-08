export default (programs = [], action) => {
  switch (action.type) {
    case 'GET_PROGRAMS':
      return action.payload;
    case 'CREATE_PROGRAM':
      return [...programs, action.payload];
    case 'DELETE_PROGRAM':
      return programs.filter((program) => {
        return program._id !== action.payload
      });
    case 'UPDATE_PROGRAM':
      return programs.map((program) => program._id === action.payload._id ? action.payload : program);
    default:
      return programs;
  }
}
import { combineReducers } from 'redux';
import auth from './users';
import programs from './programs';
import exercises from './exercises';

const rootReducer = combineReducers({
  programs,
  exercises,
  auth
});


export default rootReducer;
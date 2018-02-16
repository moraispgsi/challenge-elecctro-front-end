import { combineReducers } from 'redux';
import TasksReducer from './Tasks';

const rootReducer = combineReducers({
  tasks: TasksReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import TasksReducer from './Tasks';
import TaskFilters from './TaskFilters';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  settings: TaskFilters
});

export default rootReducer;
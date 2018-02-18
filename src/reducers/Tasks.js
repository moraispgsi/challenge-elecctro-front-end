import * as types from '../constants/TaskActionTypes';
import uuidv1 from 'uuid/v1';
import { List, Map } from 'immutable';

const initialState = List([
    Map({
      id: uuidv1(),
      text: 'A random fabulous task!',
      marked: false
    })
  ]
);

export default (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_TASK:
      return state.push(Map({id: uuidv1(), marked: false, text: action.text}));

    case types.REMOVE_TASK:
      const taskRemoveIndex = state.findIndex((task)=> task.get('id') === action.id);
      return state.remove(taskRemoveIndex);

    case types.EDIT_TASK:
      const taskEditIndex = state.findIndex((task)=> task.get('id') === action.id);
      return state.setIn([taskEditIndex, 'text'], action.text);

    case types.MARK_TASK:
      const taskMarkIndex = state.findIndex((task)=> task.get('id') === action.id);
      return state.setIn([taskMarkIndex, 'marked'], true);

    case types.UNMARK_TASK:
      const taskUnmarkIndex = state.findIndex((task)=> task.get('id') === action.id);
      return state.setIn([taskUnmarkIndex, 'marked'], false);

    default:
      return state;
  }
}
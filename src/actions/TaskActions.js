import * as types from '../constants/ActionTypes';

export const addTask = (text) => ({ type: types.ADD_TASK, text });
export const removeTask = (id) => ({ type: types.REMOVE_TASK, id });
export const editTask = (id, text) => ({ type: types.EDIT_TASK, id, text });
export const markTask = (id) => ({ type: types.MARK_TASK, id });
export const unmarkTask = (id) => ({ type: types.UNMARK_TASK, id });

/*
 #Maybe use the following actions in the future#
 MARK_ALL
 CLEAR_MARKED
 */


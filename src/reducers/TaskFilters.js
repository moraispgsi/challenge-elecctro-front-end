import { Map } from 'immutable'
import * as types from '../constants/SettingsActionTypes'
import * as sortType from '../constants/SortTypes'

const initialState = Map({
  showingMarked: true,
  sorting: sortType.NONE
});

export default (state = initialState, action) => {

  switch (action.type) {
    case types.SHOW_MARKED:
      return state.set('showingMarked', true);

    case types.NOT_SHOW_MARKED:
      return state.set('showingMarked', false);

    case types.SORT_ASC:
      return state.set('sorting', sortType.ASCENDING);

    case types.SORT_DESC:
      return state.set('sorting', sortType.DESCENDING);

    default:
      return state;

  }
}
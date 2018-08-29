/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  SET_SELECTED_PAGINATION_NUMBER,
  SET_TOTAL_PAGINATION_NUMBER
 } from './constants';

// The initial state of the App
const initialState = fromJS({
  totalPages:5,
  selectedPage:2

});

function pagination(state = initialState, action) {
  switch (action.type) {
    case SET_TOTAL_PAGINATION_NUMBER:
      return state
        .set('totalPages', action.payload.totalPages)
    case SET_SELECTED_PAGINATION_NUMBER:
      return state
        .set('selectedPage', action.payload.pageNumber)
    default:
      return state;
  }
}

export default pagination;

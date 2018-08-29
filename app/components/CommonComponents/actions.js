import {
SET_SELECTED_PAGINATION_NUMBER
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function setSelectedPageNumber(pageNumber) {
  return {
    type: SET_SELECTED_PAGINATION_NUMBER,
  };
}


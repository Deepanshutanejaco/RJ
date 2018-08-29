import {
SET_SELECTED_PAGINATION_NUMBER,
SET_TOTAL_PAGINATION_NUMBER
} from './constants';



/**
 * set the total page number
 *
 * @return {object} An action object with a type of SET_SELECTED_PAGINATION_NUMBER
 */
export function setTotalPages(totalPages) {
  return {
    type: SET_TOTAL_PAGINATION_NUMBER,
    payload:{totalPages}
  };
}



/**
 * set the selected page number
 *
 * @return {object} An action object with a type of SET_SELECTED_PAGINATION_NUMBER
 */
export function setSelectedPageNumber(pageNumber) {
  return {
    type: SET_SELECTED_PAGINATION_NUMBER,
    payload:{pageNumber}
  };
}


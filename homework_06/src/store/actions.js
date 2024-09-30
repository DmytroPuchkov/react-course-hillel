import { DELETE_COUNTRY_ACTION } from './constants.js';

const deleteCountry = (dispatch, id) => {
  dispatch({ type: DELETE_COUNTRY_ACTION, payload: id });
};

export { deleteCountry };
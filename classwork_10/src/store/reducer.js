import { USERS_SORT_ASC, USERS_SORT_DESC } from "./constants"

const initArgs = {
  sortUsers: USERS_SORT_ASC,
  users: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export { reducer, initArgs };
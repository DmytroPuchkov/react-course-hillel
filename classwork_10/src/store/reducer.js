import { USERS_SORT_ASC, USERS_SORT_DESC } from "./constants"
import { SET_SORT_USERS_ACTION, SORT_USERS_ACTION, CHANGE_USER_STATUS_ACTION } from "./actions";

const initArgs = {
  sortUsers: USERS_SORT_DESC,
  users: [
    {
      "name": "Kimberly Dach",
      "admin": true,
      "id": "1"
    },
    {
      "name": "Horace Walter",
      "admin": false,
      "id": "2"
    },
    {
      "name": "Rolando Connelly",
      "admin": true,
      "id": "3"
    },
    {
      "name": "Randall Kuvalis",
      "admin": false,
      "id": "4"
    },
    {
      "name": "Jacqueline Batz",
      "admin": true,
      "id": "5"
    },
    {
      "name": "Grant Schuster",
      "admin": true,
      "id": "6"
    },
    {
      "name": "Andy Tremblay",
      "admin": true,
      "id": "7"
    },
    {
      "name": "Crystal Feest",
      "admin": false,
      "id": "8"
    },
    {
      "name": "Frank Nienow",
      "admin": false,
      "id": "9"
    },
    {
      "name": "Yvonne Hills",
      "admin": false,
      "id": "10"
    }
  ]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SORT_USERS_ACTION:
      if (payload === USERS_SORT_ASC || payload === USERS_SORT_DESC)
        return { ...state, sortUsers: payload };
      break;
    case SORT_USERS_ACTION:
      return {
        ...state, users: state.users.sort((a, b) => {
          if (state.sortUsers === USERS_SORT_ASC) { return a.admin - b.admin } else
            if (state.sortUsers === USERS_SORT_DESC) { return b.admin - a.admin };
        }),
      };
    case CHANGE_USER_STATUS_ACTION:
      return {
        ...state, users: state.users.map(item => {
          if (item.id === payload.id) item = payload;
          return item;
        })
      }
    default:
      return state;
  }
};

export { reducer, initArgs };
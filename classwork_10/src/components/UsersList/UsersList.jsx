import React, { useContext, useEffect } from "react";
import AppContext from "../../contexts/AppContext";
import {
  SORT_USERS_ACTION,
  CHANGE_USER_STATUS_ACTION,
} from "./../../store/actions";

export default function UsersList() {
  const { users, sortUsers, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: SORT_USERS_ACTION });
  }, [users, sortUsers]);

  const handleChangeStatus = (user) => {
    dispatch({
      type: CHANGE_USER_STATUS_ACTION,
      payload: { ...user, admin: !user.admin },
    });
  };

  return users.length ? (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ color: user.admin ? `crimson` : null }}>
          {user.name}{" "}
          <button onClick={() => handleChangeStatus(user)}>
            Change Admin Status
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}

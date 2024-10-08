import React, { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

export default function UsersStatistics() {
  const {
    state: { users },
  } = useContext(UsersContext);

  return (
    <div>
      Users Statistics
      <ul>
        <li>All: {users.length}</li>
        <li>Admins: {users.filter(item => item.admin).length}</li>
        <li>Students: {users.filter(item => item.student).length}</li>
        <li>Lectors: {users.filter(item => item.lector).length}</li>
      </ul>
    </div>
  );
}

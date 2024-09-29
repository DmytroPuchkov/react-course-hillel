import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UsersContext from "../../contexts/UsersContext";
import "./style.css";

export default function UsersList() {
  const {
    state: { users },
  } = useContext(UsersContext);

  const getClass = (item) => {
    const classes = [`list__item`];

    if (item.admin) classes.push(`list__item--admin`);
    if (item.lector) classes.push(`list__item--lector`);
    if (item.student) classes.push(`list__item--student`);

    return classes.join(` `);
  };

  return users.length ? (
    <div>
      Users
      <ul>
        {users.map((item) => (
          <li key={item.id} className={getClass(item)}>
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

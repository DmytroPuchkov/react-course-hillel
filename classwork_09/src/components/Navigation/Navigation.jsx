import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navigation() {
  const menu = [
    {
      path: `/`,
      title: `Home`,
    },
    {
      path: `/users`,
      title: `Users`,
    },
  ];

  const getClass = (value) => {
    const classes = [`link-item`];

    if (value.isActive) classes.push(`link-item--active`);

    return classes.join(` `);
  };

  return (
    <nav>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink className={getClass} to={item.path}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

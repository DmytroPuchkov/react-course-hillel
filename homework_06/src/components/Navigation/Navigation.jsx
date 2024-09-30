import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Navigation() {
  const menu = [
    {
      path: `/`,
      title: `Home`,
    },
    {
      path: `/countries`,
      title: `Countries`,
    },
  ];

  const getClass = (value) => {
    const classes = [`link__item`];

    if (value.isActive) classes.push(`link__item--active`);

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

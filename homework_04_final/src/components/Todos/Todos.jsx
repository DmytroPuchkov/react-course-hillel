import React, { useState, useEffect } from "react";
import "./style.css";
import service from "./../../services/todos";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await service.get();
    setTodos(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const getClassName = (item) => {
    const classes = [`todos__item`];
    if (item.priority) classes.push(`todos__item--priority`);
    return classes.join(` `);
  };

  const handleItemDelete = async (id) => {
    await service.delete(id);
    getTodos();
  };

  const handleChangePriority = async (item) => {
    await service.put(item.id, { ...item, priority: !item.priority });
    getTodos();
  };

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className={getClassName(item)}>
          <input
            type="checkbox"
            defaultChecked={item.priority}
            onChange={() => handleChangePriority(item)}
          />
          {item.title}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}

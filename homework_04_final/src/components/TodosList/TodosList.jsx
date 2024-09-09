import React, { useState, useEffect, useMemo } from "react";
import service from "./../../services/todos";
import "./style.css";

export default function TodosList({ newTodo }) {
  const [todos, setTodos] = useState([]);

  const sortedTodos = useMemo(() => todos.sort((a, b) => b.priority - a.priority), [todos]);

  const getTodos = async () => {
    const response = await service.get();
    setTodos(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (Object.keys(newTodo).length) getTodos();
  }, [newTodo]);

  const getClassName = (item) => {
    const classes = [`todos__item`];
    if (item.priority) classes.push(`todos__item--priority`);
    if (item.active) classes.push(`todos__item--active`);
    return classes.join(` `);
  };

  const handleItemDelete = async (event, id) => {
    event.stopPropagation();
    await service.delete(id);
    getTodos();
  };

  const handleChangePriority = async (event, item) => {
    event.stopPropagation();
    await service.put(item.id, { ...item, priority: !item.priority });
    getTodos();
  };

  const handleItemActive = async (item) => {
    if (item.active) {
      delete item.active;
    } else {
      item.active = true;
    }

    await service.put(item.id, item);
    getTodos();
  };

  return sortedTodos.length ? (
    <ul>
      {sortedTodos.map((item) => (
        <li
          key={item.id}
          className={getClassName(item)}
          onClick={() => handleItemActive(item)}
        >
          {item.title}
          <button onClick={(event) => handleItemDelete(event, item.id)}>Delete</button>
          <input
            type="checkbox"
            defaultChecked={item.completed}
            onChange={(event) => handleChangePriority(event, item)}
          />
        </li>
      ))}
    </ul>
  ) : null;
}

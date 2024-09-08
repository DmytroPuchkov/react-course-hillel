import React, { useState } from "react";

export default function TodosForm() {
  const DEFAULT_NEW_TODO = {
    title: "Hello",
    completed: true,
  };
  const [newTodo, setNewTodo] = useState(DEFAULT_NEW_TODO);

  const handleNewTodoTitle = (event) => {
    setNewTodo((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const handleNewTodoCompleted = (event) => {
    setNewTodo((prevState) => ({
      ...prevState,
      completed: event.target.checked,
    }));
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="todos-form" onSubmit={handleNewTodoSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          defaultValue={newTodo.title}
          onChange={handleNewTodoTitle}
        ></input>
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.completed}
          onChange={handleNewTodoCompleted}
        ></input>
      </label>
      <button>Add new todo</button>
    </form>
  );
}

import React, { useState } from "react";

import TodosForm from "../TodosForm/TodosForm";
import TodosList from "../TodosList/TodosList";

export default function Todos() {
  const [newTodo, setNewTodo] = useState({});

  const liftedNewTodo = (item) => {
    setNewTodo(item);
  };

  return (
    <>
      <TodosForm liftingNewTodo={liftedNewTodo} />
      <TodosList newTodo={newTodo}/>
    </>
  );
}

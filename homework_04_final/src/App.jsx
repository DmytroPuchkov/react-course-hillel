import React from "react";
import Todos from "./components/Todos/Todos";

function App() {
  const liftedNewTodoToApp = (item) => {
    console.log(`in App conponent`, item);
  };

  return (
    <>
      <Todos />
    </>
  );
}

export default App;

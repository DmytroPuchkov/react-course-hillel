import React, { useState } from "react";
import TaskColumn from "./components/Task/TaskColumn/TaskColumn";
import "./App.css";

const initialTasks = [
  { id: 1, title: "Task 1", status: 0 },
  { id: 2, title: "Task 2", status: 0 },
  { id: 3, title: "Task 3", status: 0 },
  { id: 4, title: "Task 4", status: 0 },
  { id: 5, title: "Task 5", status: 0 },
  { id: 6, title: "Task 6", status: 2 },
  { id: 7, title: "Task 7", status: 2 },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const changeTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const archiveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <TaskColumn
        title="To Do"
        tasks={tasks.filter((task) => task.status === 0)}
        onStatusChange={(id) => changeTaskStatus(id, 1)}
      />
      <TaskColumn
        title="In Progress"
        tasks={tasks.filter((task) => task.status === 1)}
        onStatusChange={(id, newStatus) => changeTaskStatus(id, newStatus)}
      />
      <TaskColumn
        title="Done"
        tasks={tasks.filter((task) => task.status === 2)}
        onArchive={archiveTask}
      />
    </div>
  );
};

export default App;

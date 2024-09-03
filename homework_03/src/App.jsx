import React, { useState } from "react";
import TaskColumn from "./components/Task/TaskColumn/TaskColumn";
import "./App.css";
import {
  STATUS_TODO,
  STATUS_IN_PROGRESS,
  STATUS_DONE,
} from "./utils/constants";

const initialTasks = [
  { id: 1, title: "Task 1", status: STATUS_TODO },
  { id: 2, title: "Task 2", status: STATUS_TODO },
  { id: 3, title: "Task 3", status: STATUS_TODO },
  { id: 4, title: "Task 4", status: STATUS_TODO },
  { id: 5, title: "Task 5", status: STATUS_TODO },
  { id: 6, title: "Task 6", status: STATUS_DONE },
  { id: 7, title: "Task 7", status: STATUS_DONE },
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

  const taskTodo = (id) => changeTaskStatus(id, STATUS_TODO);
  const taskInProgress = (id) => changeTaskStatus(id, STATUS_IN_PROGRESS);
  const taskDone = (id) => changeTaskStatus(id, STATUS_DONE);

  return (
    <div className="app-container">
      <TaskColumn
        title="To Do"
        tasks={tasks.filter((task) => task.status === STATUS_TODO)}
        buttons={[{ title: "In progress", fn: taskInProgress }]}
      />
      <TaskColumn
        title="In Progress"
        tasks={tasks.filter((task) => task.status === STATUS_IN_PROGRESS)}
        buttons={[
          { title: "To do", fn: taskTodo },
          { title: "Done", fn: taskDone },
        ]}
      />
      <TaskColumn
        title="Done"
        tasks={tasks.filter((task) => task.status === STATUS_DONE)}
        buttons={[{ title: "To archive", fn: archiveTask }]}
      />
    </div>
  );
};

export default App;
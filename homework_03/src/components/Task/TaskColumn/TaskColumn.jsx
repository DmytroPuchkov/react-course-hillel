import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskColumn.css";

const TaskColumn = ({ title, tasks, buttons }) => (
  <div className="task-column">
    <h2>
      {title}: {tasks.length}
    </h2>
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} buttons={buttons} />
      ))}
    </ul>
  </div>
);

export default TaskColumn;
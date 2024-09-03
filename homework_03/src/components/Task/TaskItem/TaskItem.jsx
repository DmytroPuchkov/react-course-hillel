import React from "react";
import "./TaskItem.css";
import TaskButton from "../TaskButton/TaskButton";

const TaskItem = ({ task, buttons }) => (
  <li className="task-item">
    {task.title}
    {buttons.map((button, index) => (
      <TaskButton
        key={index}
        label={button.title}
        onClick={() => button.fn(task.id)}
      />
    ))}
  </li>
);

export default TaskItem;
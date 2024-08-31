import React from "react";
import "./TaskItem.css";
import TaskButton from "../TaskButton/TaskButton";

const TaskItem = ({ task, onStatusChange, onArchive }) => (
  <li className="task-item">
    {task.title}
    {task.status === 0 && (
      <TaskButton
        label="In progress"
        onClick={() => onStatusChange(task.id, 1)}
      />
    )}
    {task.status === 1 && (
      <>
        <TaskButton label="To do" onClick={() => onStatusChange(task.id, 0)} />
        <TaskButton label="Done" onClick={() => onStatusChange(task.id, 2)} />
      </>
    )}
    {task.status === 2 && (
      <TaskButton label="To archive" onClick={() => onArchive(task.id)} />
    )}
  </li>
);

export default TaskItem;

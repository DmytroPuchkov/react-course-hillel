import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskColumn.css";

const TaskColumn = ({ title, tasks, onStatusChange, onArchive }) => (
  <div className="task-column">
    <h2>
      {title}: {tasks.length}
    </h2>
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onArchive={onArchive}
        />
      ))}
    </ul>
  </div>
);

export default TaskColumn;

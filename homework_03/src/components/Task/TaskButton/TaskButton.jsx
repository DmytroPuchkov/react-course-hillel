import React from "react";
import "./TaskButton.css";

const TaskButton = ({ label, onClick}) => (
  <button className={`task-button`} onClick={onClick}>
    {label}
  </button>
);

export default TaskButton;

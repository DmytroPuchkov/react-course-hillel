import React, { useState, useEffect } from "react";
import "./style.css";
import { API, TASK_STATUS } from "../../constants/tasks";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [tasksTodo, setTasksTodo] = useState([]);
  const [tasksProgress, setTasksProgress] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  const getTasks = async () => {
    try {
      const request = await fetch(API),
        response = await request.json();

      console.log(response);
      setTasks(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setTasksTodo(tasks.filter((item) => item.status === TASK_STATUS.TODO));
    setTasksProgress(
      tasks.filter((item) => item.status === TASK_STATUS.PROGRESS)
    );
    setTasksDone(tasks.filter((item) => item.status === TASK_STATUS.DONE));
  }, [tasks]);

  const handleTasksProgress = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PUT`,
          body: JSON.stringify({ ...item, status: TASK_STATUS.PROGRESS }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setTasks((prevState) =>
        prevState.map((el) => {
          if (el.id === response.id) el = response;
          return el;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleTasksTodo = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PUT`,
          body: JSON.stringify({ ...item, status: TASK_STATUS.TODO }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setTasks((prevState) =>
        prevState.map((el) => {
          if (el.id === response.id) el = response;
          return el;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleTasksDone = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PUT`,
          body: JSON.stringify({ ...item, status: TASK_STATUS.DONE }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setTasks((prevState) =>
        prevState.map((el) => {
          if (el.id === response.id) el = response;
          return el;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleTasksArchive = async (item) => {
    try {
      await fetch(API + `/${item.id}`, {
        method: `DELETE`,
      }),
        setTasks((prevState) => prevState.filter((el) => el.id !== item.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="board__wrapper">
      <div className="tasks__wrapper">
        <p className="tasks__title">To Do: {tasksTodo.length}</p>
        {tasksTodo.length ? (
          <ul className="tasks__list">
            {tasksTodo.map((item) => (
              <li key={item.id}>
                {item.title}{" "}
                <button onClick={() => handleTasksProgress(item)}>
                  In Progress
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="tasks__wrapper">
        <p className="tasks__title">In Progress: {tasksProgress.length}</p>
        {tasksProgress.length ? (
          <ul className="tasks__list">
            {tasksProgress.map((item) => (
              <li key={item.id}>
                {item.title}{" "}
                <button onClick={() => handleTasksTodo(item)}>To Do</button>
                <button onClick={() => handleTasksDone(item)}>Done</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="tasks__wrapper">
        <p className="tasks__title">Done: {tasksDone.length}</p>
        {tasksDone.length ? (
          <ul className="tasks__list">
            {tasksDone.map((item) => (
              <li key={item.id}>
                {item.title}{" "}
                <button onClick={() => handleTasksArchive(item)}>
                  To Archive
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

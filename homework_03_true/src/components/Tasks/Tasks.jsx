import React, { useState, useEffect } from "react";
import "./style.css";
import { API, TASK_STATUS } from "../../constants/tasks";
import Task from "../Task/Task";

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

  const TASKS = [
    {
      title: "To Do",
      tasks: tasksTodo,
      btns: [{ title: "In Progress", action: handleTasksProgress }],
    },
    {
      title: "In Progress",
      tasks: tasksProgress,
      btns: [
        { title: "To Do", action: handleTasksTodo },
        { title: "Done", action: handleTasksDone },
      ],
    },
    {
      title: "Done",
      tasks: tasksDone,
      btns: [{ title: "To Archive", action: handleTasksArchive }],
    },
  ];

  return (
    <div className="board__wrapper">
      {TASKS.map((item, index) => (
        <Task key={index} title={item.title} tasks={item.tasks} btns={item.btns} />
      ))}
    </div>
  );
}

import React, { useState } from "react";
import Task from "./Task";

export default function Input() {
  const [task, setTask] = useState({
    description: null,
    status: true,
    time: Date.toLocaleString(),
  });
  const [tasks, setTasks] = useState([]);

  const changeStatus = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: !task.status } : task,
    );
    setTasks(updatedTasks);
  };

  let createTask = (value) => {
    const currentDate = new Date();
    let newTask = {
      description: value,
      status: true,
      time: currentDate.toLocaleString(),
    };
    setTask(newTask);
    console.log(newTask);
  };

  let addTask = () => {
    let values = [...tasks, task];
    setTasks(values);
    console.log(tasks);
  };

  return (
    <div>
      <div className="container box">
        <label>Создайте задачу</label>
        <input
          type="text"
          className="inputField"
          onChange={(event) => {
            createTask(event.target.value);
          }}
        />
        <button onClick={addTask}>Создать</button>
      </div>
      <div>
        {tasks.map((el, index) => {
          return (
            <Task
              key={index}
              task={el}
              changeStatus={() => changeStatus(index)}
              index={index + 1}
              description={el.description}
              status={el.status}
              time={el.time}
            />
          );
        })}
      </div>
    </div>
  );
}

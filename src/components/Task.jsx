import React from "react";

export default function Task({ changeStatus, task, index }) {
  return (
    <div
      className={task.status ? "task active" : "task inactive"}
      onClick={changeStatus}
    >
      <div>{index}</div>
      <div className="task-description">{task.description}</div>
      <div>{task.time}</div>
    </div>
  );
}

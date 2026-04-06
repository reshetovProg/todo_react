import React from "react";
import { useState } from "react";
import TaskFrom from "./TaskFrom";


export default function Task({ changeStatus, task, index, changeDescription}) {
  const [visibleFlag,setVisibleFlag] = useState(false);
  let changeVisible = ()=> {
    setVisibleFlag(!visibleFlag)
    console.log (visibleFlag)

  }
  return (
    <>

    <div
      className={task.status ? "task active" : "task inactive"}
      onClick={changeStatus}
    >
      <div>{index}</div>
      <div className="task-description">{task.description}</div>
      <div>{task.time}</div>
      <button onClick={changeVisible}>Edit</button>
    </div>
    <div className={visibleFlag ? "window-box visible" : "window-box invisible"}>
        
        <TaskFrom onClick={changeVisible} 
        task={task}
        changeDescription={()=> changeDescription(index, newText)}
        changeVisible={changeVisible}
        />
      
      </div>

    </>
  );
}

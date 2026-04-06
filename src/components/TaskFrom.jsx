import { useState } from "react";
import React from 'react'

export default function TaskFrom({task, changeDescription, changeVisible}) {

    const [newText, setNewText] = useState(task.description);

    let save=()=>{
        console.log(task)
        changeDescription(newText)
        changeVisible()

    }


    
  return (
    <div>
        
      <form action="">
        <input type="text" value={newText} onChange={(event)=>setNewText(event.target.value)}></input> 
        


      </form>
      <button onClick={save}>Save</button>

    </div>
  )
}

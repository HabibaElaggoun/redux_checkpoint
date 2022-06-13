import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./task.css";
import {editTask, deleteTask, isDone} from "../../JS/Actions/TasksAction"

const Task = ({el}) => {

  const dispatch = useDispatch()
  const [editTit, setEditTit]= useState(false)
  const [input, setInput]= useState(el.title)
  

  const handleClick = () => {
    if ( editTit ) {
      setEditTit ( !editTit )
      dispatch( editTask( input,el.id))
    }
    setEditTit( !editTit )
    
  }
  
  
  return (

<div className='task'>
  
    {!editTit ? (
      <div className='tit-task'> <h2 className= {el.isdone ? "doneclass":"undoneclass"}> {el.title} </h2></div>
    ) : (

  <div className='task'>
    <form>
      <input   type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </form>
  </div>
    )}

  <div className="button">
    <button className='button-30' onClick={handleClick}> { !editTit ? "Edit" : "Save"}</button>
    <button className='button-30' onClick={()=>dispatch(deleteTask(el.id))} >Delete</button>
    <button className='button-30' onClick={()=>{ dispatch (isDone(el.id));console.log("x")}}>
          {el.isdone? "Done" : "UnDone"}
    </button>
  </div>


</div>

  )
}
export default Task
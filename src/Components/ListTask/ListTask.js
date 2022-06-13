
import React from 'react'
import { useSelector } from 'react-redux'
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task'
import "./listTask.css"

const ListTask = () => {
const taskL=useSelector((state) => state.taskL);
const task_F = useSelector(state => state.task_F)
  return (

  <div className='tasklist'>
    <h1 className='text'>Welcome !</h1>
  <br/>
   <AddTask/>

    {
    task_F=== "ALL" ? taskL.map((el) => (
        <Task key = {el.id} el = {el} /> )) : task_F==="DONE"?

    taskL.filter(el=> el.isdone).map((el) => (
        <Task key = {el.id} el = {el} /> )) : taskL.filter(el => !el.isdone ).map((el) => (
        <Task key = {el.id} el = {el} />
      ))
    } 

  </div>
  )
}

export default ListTask

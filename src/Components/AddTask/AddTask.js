import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/Actions/TasksAction';
import './add.css'


const AddTask = () => {

  const [ntitle, setNtitle] = useState({id:0, title:"", isdone:"true"});
  const dispatch = useDispatch()

 const handleChange = (e) =>{
  setNtitle({...ntitle, [e.target.name] : e.target.value})
 }
 
  return (
    <div className="addT">

      
      <input className='inputadd' placeholder="New Task" type="text" name="title" onChange={handleChange}/>
    
         
      <button className='but_add' onClick={()=>{ dispatch ( addTask(ntitle) )} } > Add</button>
    </div>
  )
}

export default AddTask
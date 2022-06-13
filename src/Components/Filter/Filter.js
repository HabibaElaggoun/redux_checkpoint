import React from 'react';
import {ALL, DONE, UNDONE } from '../../JS/Actions/TasksAction';
import { useDispatch } from 'react-redux'
import './filter.css'


const Filter = () => {

    const dispatch=useDispatch()

  return (
    <div>
    <div ClassName="Filter">
      <div className='typesF'>
       
        <h1>Our types of Filter</h1>
      </div>
<div className='but_ton'>
      <button className='button-29' onClick={()=>dispatch(ALL("All"))}>All</button>
      <button  className='button-29' onClick={()=>dispatch(DONE("DONE"))}>DONE</button>
      <button className='button-29' onClick={()=>dispatch(UNDONE("UNDONE"))}>UNDONE</button>
</div>
    </div></div>
  )
}

export default Filter
import { ADD_TASK, EDIT_TASK, DELETE_TASK, IS_DONE, All_Tasks, DONE_Tasks, UNDONE_Tasks } from "../Constants/ActionTypes";


export const addTask = (task) => {
    return {
      type: ADD_TASK,
      payload: task,
    };
  };

export const editTask=(editTit,id)=>{
    return{
      type:EDIT_TASK ,
      payload:{editTit,id}
    };
};

export const deleteTask=(id)=>{
  return{
    type: DELETE_TASK ,
    payload:id
  };
};

export const isDone = (id) => {
  return{
  type: IS_DONE,
  payload:id 
  };
};
export const ALL = () => {
  return{
  type: All_Tasks
  };
};

export const DONE = () => {
  return{
  type: DONE_Tasks
  };
};

export const UNDONE = () => {
  return{
  type: UNDONE_Tasks
  };
};
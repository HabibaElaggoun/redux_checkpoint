
import { ADD_TASK, EDIT_TASK, DELETE_TASK, IS_DONE, All_Tasks , DONE_Tasks, UNDONE_Tasks } from "../Constants/ActionTypes";

const initialState = {task_F:"ALL", 
    taskL:[
    { id:0, title:"First Task", isdone:true},
    { id:1, title:"Second Task", isdone:false},
    { id:2, title:"Third Task", isdone:false},
    { id:3, title:"Fourth Task", isdone:true},
],
};

export const TasksReducer = (state= initialState, {type, payload}) =>
{ switch (type) {
    case  ADD_TASK:
        return {
          ...state,
          taskL: [...state.taskL, { ...payload, id:state.taskL.length+1 }],
        };

    case  EDIT_TASK:
        return {
           ...state,
           taskL: state.taskL.map((el)=> el.id ===payload.id? {...el, title: payload.editTit} : el),
          };
    
    case  DELETE_TASK:
        return {
           ...state,
           taskL: state.taskL.filter((el) => el.id !== payload),
              };
    
    case IS_DONE: 
        return {
          ...state,
          taskL: state.taskL.map((el) => el.id === payload ? {...el, isdone: !el.isdone} : el),            
               };
           
    case All_Tasks: 
        return {
          ...state,
          task_F:"ALL"
        };
    case DONE_Tasks: 
        return {
          ...state,
          task_F:"DONE"
        };
    case UNDONE_Tasks:
        return {
          ...state,
          task_F:"UNDONE"
        };

    default: 
    return state;

}
};

























































































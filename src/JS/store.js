
import { createStore } from "redux";
import { TasksReducer } from "./Reducer/TasksReducer";


export const store = createStore( TasksReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
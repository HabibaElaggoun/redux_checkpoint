
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
import Filter from './Components/Filter/Filter';


function App() {
  return (
    <div className="App">
      
      <h1>TO DO App</h1>
      
      <Routes>
        <Route path="/" element ={ <div className='routes' style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly' }}  ><ListTask/>
                                        <Filter />
                                   </div> } />

        <Route path="/add" element ={ <AddTask /> } />

      </Routes>


    </div>
  );
}

export default App;

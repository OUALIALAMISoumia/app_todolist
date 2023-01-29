import './App.css';
import FromContext from './AppContext/FormContext';
import Formtasks from './AppContext/Formtasks';
// import Formtasks from './AppProps/Formtasks';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';



function App() {

  const [tasks,settasks]=useState([
    {id:uuidv4(), nom:'Sport'},
    {id:uuidv4(), nom:'Film'},
    {id:uuidv4(), nom:'Voyage'}, 
  ])
  
  const [task,setTask]=useState('');
  
  const addTask=()=>{

    let ntasks=[...tasks];
    let ntask={};
  
    ntask.id=uuidv4();
    ntask.nom=task
    ntasks.push(ntask);
    settasks(ntasks);
    setTask('');
  } 
  
  const deletetask=(idp)=>{
    let ntasks=tasks.filter((t)=>{
      return t.id!==idp
    })
    settasks(ntasks);
  }

  return (
    <div className="App">

      <FromContext.Provider value={{tasks,settasks,task,setTask,addTask,deletetask}}>
          <Formtasks/>
      </FromContext.Provider>

      {/* <Formtasks/> */}

    </div>
  );
}

export default App;

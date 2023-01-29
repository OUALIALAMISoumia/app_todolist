import React, { useContext } from 'react'
import Task from './Task'
import FromContext from './FormContext'
import './style.css'


export default function Formtasks() {

  const {tasks,settasks,task,setTask,addTask,deletetask}=useContext(FromContext)



  return (
    <div className='c1'>
      
          <h1>TODO LIST APP</h1> <br />

          <form>
            <h3 className='text-light'>Entre Une Tache: </h3>  <br/>
            <input type="text"  className='form-control m-auto shadow mb-4 bg-body rounded' placeholder="" 
                  style={{width:"500px"}} value={task}  onChange={(e)=>{setTask(e.target.value)}} /> 
            <input type="button" className='fs-5 btn btn-outline-primary'  onClick={addTask} value="Ajouter"/>
          </form>
          <br/>

          <h3 className="text-light">LISTE DES CHOSE A FAIRE</h3>
          <br/>

          <ul>
            {
              tasks.map((t)=>{
              return <li key={t.id} > <Task delf={(id)=>deletetask(t.id)} txt={t.nom}/> </li>

              })
            }
          </ul>
    
    </div>
  )
}

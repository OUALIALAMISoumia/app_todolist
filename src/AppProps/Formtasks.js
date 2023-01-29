import React, { useState } from 'react'
import Task from './Task'
import { v4 as uuidv4 } from 'uuid'
import './style.css'

export default function Formtasks() {

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
    <div className='c1' >
      {/* <div className='row justify-content-center'>
        <div className='mt-5 py-3 col-8 ' style={{backgroundColor: 'white'}} > */}
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
        {/* </div>
      </div> */}
    </div>
  )
}

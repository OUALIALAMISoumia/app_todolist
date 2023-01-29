import React, { useRef }  from 'react'
import './style.css'

export default function Task({txt,delf}) {

  const refdone=useRef();

  const done =()=>{
    refdone.current.classList.add('c4')
  }
  
  return (
    <div>
        <form>
          <input type="text" className='border border-dark rounded fs-5'  style={{width:"300px", height:"40px"}} ref={refdone} readOnly value={txt} />  &nbsp;      
          <input type="button"  className='fs-5 fst-italic btn btn-outline-danger' onClick={delf}  value="Supprimer" /> &nbsp;
          <input type="button"  className='fs-5 fst-italic btn btn-outline-success' onClick={done}   value="done" /> &nbsp;
        </form>
        <br/>
    </div>
  )
}

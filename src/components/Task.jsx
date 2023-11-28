import React from 'react'

function Task({title, key, deleteTask}) { //Destructuring de props
  return (
    <>
    <li>{title}</li>
    <br/>
    <button onClick={deleteTask}>Delete Task</button>
    </>
  )
}

export default Task
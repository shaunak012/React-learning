import React from 'react'

export const Todo = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.tittle}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

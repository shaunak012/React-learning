import React from 'react'
import { Todo } from "../MyComponents/Todo";

export const Todos = (props) => {
  let myStyle={
    minHeight:"55vh"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className="text-center my-3">*******TODO LIST*******</h3>
      {props.todo.length === 0 ? "no todos left" :
          props.todo.map((todo) => {
            return <>
              <Todo todo={todo} keys={todo.sno} onDelete={props.onDelete}></Todo>
            </>
          })
      }

    </div>
  )
}

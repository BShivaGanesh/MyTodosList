import React from 'react'
import TodoItem from './TodoItem';


const Todos = (props) => {
  const myStyle={
    minHeight:"70vh",
    margin: "40px",
    marginLeft: "100px"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0? "No todos to display":props.todos.map((todo)=>{
        return(
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
        )
      })
      }
      
    </div>
  )
}

export default Todos

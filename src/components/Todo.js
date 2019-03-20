import React from 'react'

const Todo = ({todo, removetodo}) => {
    // Each Todo
    return (<li onClick={() => {removetodo(todo.id)}}>{todo.text}</li>);
  }

export default Todo
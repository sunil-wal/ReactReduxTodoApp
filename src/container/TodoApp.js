import React, { Component } from 'react'
import Title from '../components/Title'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

class TodoApp extends Component{
    constructor(props){
      // Pass props to parent class
      super(props);
      // Set initial state
      this.state = {
        data: []
      }
      // this.apiUrl = 'http://5a69ae0cd039b900122244a0.mockapi.io/todos'
    }
  
    render(){
      // Render JSX
      return (
        <div>
          <Title/>
          <TodoForm />
          <TodoList />
        </div>
      );
    }
  }

  export default TodoApp;
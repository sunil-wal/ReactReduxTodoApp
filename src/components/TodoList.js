import React from "react";
import { connect } from "react-redux";
import Todo from '../components/Todo'
import {removeTodo} from "../actions";
const TodoList = ({ todos, removetodo }) => {
  const todoNode = todos.map(todo => {
    return <Todo key={todo.id} todo={todo} removetodo={removetodo} />;
  });
  return <ul>{todoNode}</ul>;
};
const mapStateToProps = state => ({
    todos: state
  })
  
  const mapDispatchToProps = dispatch => ({
    removetodo: id => dispatch(removeTodo(id))
  })
export default connect(mapStateToProps,
    mapDispatchToProps)(TodoList);

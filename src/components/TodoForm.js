import React from "react";
import { connect } from "react-redux";
import {addTodo} from "../actions";

const TodoForm = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        +
      </button>
    </div>
  );
};

export default connect()(TodoForm);

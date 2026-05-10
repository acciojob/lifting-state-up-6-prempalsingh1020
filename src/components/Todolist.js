import React from "react";

const Todolist = ({ todos, handleComplete }) => {
  return (
    <div>
      {
      todos.map(function(todo) {
        return (
          <div key={todo.id}>
            <span>{todo.text}</span>

            <button onClick={()=>handleComplete(todo.id)}>
              Complete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
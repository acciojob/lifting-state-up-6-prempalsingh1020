
import React, { useState } from "react";
import './../styles/App.css';
import Todolist from "./Todolist";

const App = () => {
  const [todos,setTodos] = useState([
    {id:1,text:'Learn React',completed:false},
    {id:2,text:'Build a React app',completed:false},
    {id:3,text:'Deploy the React app',completed:false}
  ])


    function handleComplete(id){

      const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    // console.log(id,todos)

    setTodos(updatedTodos);

    };


  return (
    <div>
        
        <h1>TODO APP</h1>
         
         <Todolist todos={todos} handleComplete={handleComplete} />

    </div>
  )
}

export default App

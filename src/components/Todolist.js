import React from "react";

const Todolist = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>

          {!todo.completed ? (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          ) : (
            <span>Completed</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todolist;









// import React from "react";

// const Todolist = ({ todos, handleComplete }) => {
//   return (
//     <div>
//       {
 //     // todos.map(function(todo) {
//         return (
//           <ul key={todo.id}>
//             <li>
//             <span>{todo.text}</span>

//             <button onClick={()=>handleComplete(todo.id)}>
//               Complete
//             </button>
//             </li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default Todolist;
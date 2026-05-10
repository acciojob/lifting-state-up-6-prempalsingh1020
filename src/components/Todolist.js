
import React from "react";

const Todolist = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li>
            <span>
              {todo.text} {todo.completed && ""}
            </span>

            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            )}
          </li>
        </ul>
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
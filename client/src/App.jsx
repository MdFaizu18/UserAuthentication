// App.js
// import React, { useState } from 'react';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';

import Counter from "./components/Counter";
import TodoListApp from "./components/TodoListApp";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div>
//       <TodoInput addTodo={addTodo} />
//       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default App;

const App = ()=>{
  return(
    <div>
  {/* <Counter/> */}
  <TodoListApp/>
    </div>
  )
}

export default App;
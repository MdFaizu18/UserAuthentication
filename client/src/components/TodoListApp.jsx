import React ,{useState}from 'react'

const TodoListApp = () => {
    const [todos, SetTodos] = useState([]);

    const addTodo = (e) => {
        console.log(e.target);
        e.preventDefault();
        const inputValue = e.target.todo.value.trim();
        if (!inputValue) {
            alert('Please enter a todo item');
            return;
        }
        SetTodos([...todos, {text: e.target.todo.value, completed: true}]);
        e.target.todo.value = '';
    }

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        SetTodos(newTodos);
    }
    
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        SetTodos(newTodos);
    }
    
    return (
    <>
        <h1>Todo List App</h1>
        <form onSubmit={addTodo}>
            <input type="text" name="todo" placeholder="Add Todo..." />
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
                    {todo.text}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={() => SetTodos([])}>Clear All</button>
    </>
  )
}

export default TodoListApp
import React, { useState } from 'react'

function TodoApp() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(inputValue.trim() === ''){
            return alert('Please enter a task');
        }
        setTodos([...todos, {text: inputValue, completed: false}]);
        setInputValue('')
    }

    const handleDeleteTodo = (i) => {
        const updatedTodos = todos.filter((_, index) => index !== i);
        setTodos(updatedTodos);
    }

    const handleEditTodo = (i) => {
        const newTodos = todos.map((todo, index) => {
            if(index === i){
                const newText = prompt('Edit you task',todo.text);
                if(newText !== null && newText.trim() !== ''){
                    return {...todo, text: newText}
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const handleToggleComplete = (i) => {
        const newTodos = todos.map((todo, index) => {
            if(index === i){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        setTodos(newTodos);
    }
    

  return (
    <div>
        <h3>Simple Todo App with Delete, Edit</h3>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter a Task'/>
        <button onClick={handleAddTodo}>Add Task</button>
        <ul>
            {todos.map((todo, index) => (
                <div key={index}>
                    <li>
                        <input type='checkbox' checked={todo.completed || false} onChange={() => handleToggleComplete(index)}/>
                        <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}} key={index}>{todo.text}</span>
                        <button onClick={() => handleEditTodo(index)}>Edit </button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp;
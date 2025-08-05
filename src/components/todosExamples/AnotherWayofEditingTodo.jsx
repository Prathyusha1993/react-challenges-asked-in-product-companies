import React, { useState } from 'react'

function AnotherWayofEditingTodo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [editInputValue, setEditInputValue] = useState('');
    const [editInputId, setEditInputId] = useState(null);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(inputValue.trim() === ''){
            return alert('PLease enter task');
        }
        setTodos([...todos, {text: inputValue, completed: false}]);
        setInputValue('')
    }

    const handleDelete = (i) => {
        const updatedTodos = todos.filter((_, index) => index !== i);
        setTodos(updatedTodos);
    }

    const handleEditTodo = (i) => {
        setEditInputId(i);
        setEditInputValue(todos[i].text);
    }

    const handleSubmitEditTodo = (e, i) => {
        e.preventDefault();
        if(editInputValue.trim() === ''){
            return;
        }
        const updatedTodos = todos.map((todo, index) => (index === i ? {...todo, text: editInputValue} : todo));
        setTodos(updatedTodos);
        handleCancelTodo();
    }

    const handleCancelTodo = () => {
        setEditInputId(null);
        setEditInputValue('');
    }

    const handleToggleComplete = (i) => {
        const newTodos = todos.map((todo, index) => index === i ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
    }
  return (
    <div>
        <h3>Another Way of Editing Todos</h3>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter Task'/>
        <button onClick={handleAddTodo}>Add Task</button>
        <ul>
            {todos.map((todo, index) => (
                <div key={index}>
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        {editInputId === index ? (
                            <form onSubmit={(e) => handleSubmitEditTodo(e, index)}>
                                <input type='text' value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)} placeholder='Edit todo'/>
                                <button type='submit'>Save</button>
                                <button type='button' onClick={handleCancelTodo}>Cancel</button>
                            </form>
                        ) : (
                            <> 
                            <input type='checkbox' checked={todo.completed || false} onChange={() => handleToggleComplete(index)}/>
                            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                            <button onClick={() =>handleEditTodo(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            </>
                        )} 
                    </li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default AnotherWayofEditingTodo;
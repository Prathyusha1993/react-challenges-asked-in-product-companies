import React, {useState} from 'react'

function TodoWithContext() {
    const {todos,  addTodos, deleteTodos, editTodos, toggleComplete} = useTodos();
    const [inputValue, setInputValue] = useState('');
    const [editInputValue, setEditInputValue] = useState('');
    const [editInputId, setEditInputId] = useState(null);

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodos(inputValue);
        setInputValue('');
    }

    const handleEditTodo = (i) => {
        setEditInputId(i);
        setEditInputValue(todos[i].text);
    }

    const handleSubmitEditTodo = (e, i) => {
        e.preventDefault();
        editTodos(i, editInputValue);
        handleCancelTodo();
    }

    const handleCancelTodo = () => {
        setEditInputId(null);
        setEditInputValue('');
    }

  return (
    <div>
        <h3>Todo App With Context API</h3>
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
                            <input type='checkbox' checked={todo.completed || false} onChange={() => toggleComplete(index)}/>
                            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
                            <button onClick={() =>handleEditTodo(index)}>Edit</button>
                            <button onClick={() => deleteTodos(index)}>Delete</button>
                            </>
                        )} 
                    </li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default TodoWithContext;
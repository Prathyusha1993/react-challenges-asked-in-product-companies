import React, {createContext, useContext, useEffect, useState} from 'react'

const TodoCreateContext = createContext();

export const TodoCreateProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodos = (text) => {
        if(text.trim()){
            setTodos(prev => [...prev, {text, completed: false}]);
        }
    };

    const deleteTodos = (index) => {
        setTodos(prev => prev.filter((_, i) => i !== index));
    }

    const editTodos = (index, newText) => {
        const updatedTodos = todos.map((todo, i) => (i === index ? {...todo, text: newText} : todo));
        setTodos(updatedTodos);
    }

    const toggleComplete = (index) => {
        setTodos(prev => prev.map((todo, i) => (i === index ? {...todo, completed: !todo.completed} : todo)));
    }

    return(
        <TodoCreateContext.Provider value={{ todos, addTodos, deleteTodos, editTodos, toggleComplete}}>
            {children}
        </TodoCreateContext.Provider>
    )
}

export const useTodos = () => useContext(TodoCreateContext);

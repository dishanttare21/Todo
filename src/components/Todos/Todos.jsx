import React, { useState, useEffect } from 'react'
// import style from './Todos.module.css';
import Todo from '../Todo/Todo';
import List from '@mui/material/List';
import Box from '@mui/material/Box'

const Todos = ({ todos, setTodos, fetchTodos }) => {
    
    const handleDelete = async (id) => {
        console.log(todos)
        try {
            const deleteTodo = await fetch(`https://todolist-bac.herokuapp.com/todos/delete/${id}`, { method: 'DELETE' })
            setTodos(todos => todos.filter(todo => todo._id !== id))
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Box sx={{ mx: "auto"}}>
            <List sx={{ width: '80%', maxWidth: 650, bgcolor: 'background.paper', mx:"auto" }}>
                {todos.map(todo => (
                    <Todo
                        key={todo._id}
                        id={todo._id}
                        title={todo.title}
                        completed={todo.completed}
                        createdAt={todo.createdAt}
                        todos={todos}
                        setTodos={setTodos}
                        fetchTodos={fetchTodos}
                        handleDelete={handleDelete} />
                ))}
            </List>
        </Box>
    )
}

export default Todos

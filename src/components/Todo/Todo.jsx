import React from 'react'
import style from './Todo.module.css';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box'
import { Checkbox } from '@mui/material';

const Todo = ({ id, title, completed, createdAt, todos, setTodos, fetchTodos, handleDelete }) => {
    const [isCompleted, setIsCompleted] = useState(completed);
    createdAt = new Date(createdAt).toLocaleString();

    const changeCompleted = async (id) => {
        setIsCompleted(completed =>!completed)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !completed })
        };
        
        const response = await fetch(`https://todolist-bac.herokuapp.com/todos/update/${id}`, requestOptions);
        const data = await response.json();
        // console.log('checked')
    }
    return (
            <ListItem>
                <Checkbox checked={isCompleted} onClick={() =>changeCompleted(id)} />
                <ListItemText primary={title} secondary={createdAt} />
                <Tooltip TransitionComponent={Zoom} title="Delete">
                    <IconButton aria-label="delete" onClick={() => handleDelete(id)} color='error'>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </ListItem>
    )
}

export default Todo

import React from 'react'
import style from './AddTask.module.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AddTask = ({ inputText, setInputText, todos, setTodos, fetchTodos }) => {
    const handleSubmit = async e => {

        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: inputText })
        };
        try {
            const res = await fetch('https://todolist-bac.herokuapp.com/todos/new', requestOptions)
            const data = await res.json();
            // setTodos([
            //     {_id: data._id,title: data.title, createdAt: data.createdAt}, ...todos
            // ])
            fetchTodos()
            console.log(todos)
        } catch (error) {
            console.log(error)
        }

    }
    const inputTexthandler = e => {
        setInputText(e.target.value)
    }
    return (
        <Box sx={{width: '80%', mx: "auto"}}>
            <form action="">
                <TextField size="small"
                 id="outlined-basic"
                  label="Task" 
                  variant="outlined" 
                  fullWidth 
                  onChange={inputTexthandler} />

                <Box textAlign='center' sx={{my: "0.5em"}}>
                    
                    <Button variant="outlined" startIcon={<AddOutlinedIcon />} onClick={handleSubmit} >
                        Add Task
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default AddTask

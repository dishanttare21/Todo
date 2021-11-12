import './App.css';
import AddTask from './components/AddTask/AddTask';
import Todos from './components/Todos/Todos';
import {useState, useEffect} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

    useEffect(() => {
        fetchTodos();
    }, [setTodos])

    const fetchTodos = async () =>{
        try {
            const data = await fetch('https://todolist-bac.herokuapp.com/todos');
            const response = await data.json();
            console.log(response);
            setTodos(response);
        } catch (error) {
            console.log(error);
        }
    }
  
  return (
    <div className="App">
      <main>
        <AddTask 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        fetchTodos={fetchTodos} />
        <Todos 
        todos={todos} 
        setTodos={setTodos} 
        fetchTodos={fetchTodos} />
      </main>
    </div>
  ); 
}

export default App;

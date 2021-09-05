import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const[list, setList] = useState([]);
  const[newTodo, setNewTodo]=useState("");
 
  return (
    <div className="App">
      <div className="App-header">
        <Form
          list = {list}
          setList= {setList}
          newTodo = {newTodo}
          setNewTodo = {setNewTodo}
        />

        <TodoList
          list = {list}
        />
      </div>
    </div>
  );
}

export default App;

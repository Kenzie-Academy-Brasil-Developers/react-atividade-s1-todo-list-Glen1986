import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';
//import name from './components/TodoList'

function App() {
  
const[list, setList] = useState([]);
const[newTodo, setNewTodo]=useState("");
 
  const addTodo = (newTodo) =>{
    setList([...list, newTodo])
    setNewTodo("")
    console.log(list)
  }

  const handleTodo =(a)=>{
    list.filter((item) => item !== a )
 }
    return (
    <div className="App">
      <div className="App-header">
        <Form
          list = {list}
          setList= {setList}
          newTodo = {newTodo}
          setNewTodo = {setNewTodo}
          addTodo ={addTodo}
        />

        <TodoList
          list = {list}
          setList= {setList}
          newTodo = {newTodo}
          setNewTodo = {setNewTodo}
          addTodo ={addTodo}
          handleTodo = {handleTodo}
             />
      </div>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import Form from './components/Forms';
import './App.css'
import ToDoList from './components/To-do-list'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

const FilterHandler = () => {
  switch (status) {
    case "completed":
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case "uncompleted":
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}
useEffect((() => {
  FilterHandler()
}), [todos, status])
useEffect((()=>{
  getLocalTodos()
}), [])
const saveLocalTodos = () => {
  localStorage.setItem('todos', JSON.stringify([]))
}
const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
  }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
  }
}
  return (
    <div className="wrapper">
      <header>
        <h1>Nafisa's to-do list</h1>
      </header>
      <Form setInputText={setInputText} 
      setTodos={setTodos} 
      todos={todos} 
      inputText={inputText}
      setStatus={setStatus} 
      />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;

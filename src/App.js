import React, {useState} from 'react';
import "./App.css";
import TodoForm from './components/todoform';
import TodoList from './components/todolist';

function App(){
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>React Todo</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </header>
    </div>
  );
};

export default App;
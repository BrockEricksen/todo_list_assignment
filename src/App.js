import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodoList([...todoList, todoItem]);
    setNewTodo('');
  }

  const handleTodoDelete = (delIndex) => {
    const filteredTodoList = todoList.filter((todo, i) =>  {
      return i !== delIndex;
    });
    setTodoList(filteredTodoList);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todoList.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo
    });
    setTodoList(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        handleNewTodoSubmit(e);
      }} >
        <input onChange={(e) => {
          setNewTodo(e.target.value);
        }} type="text" value={ newTodo }/>
        <div> 
          <button>Add</button> 
        </div>
      </form>

        {todoList.map((todo, i) => {
          return(
            <Todo 
            key={i}
            i={i}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete}
            />
          );
        })}

    </div>
  );
}

export default App;

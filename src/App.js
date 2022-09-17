import React from 'react';
import { useState, useRef } from 'react';
import TodoList from './TodoList/TodoList';


function App() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"])
  return (
    <>
      <TodoList todos={todos} />
      <input type="Text" />
      <button>Add Todo</button>
      <button>Clear Todo</button>
      <p>{todos.length} left to do</p>
    </>
  )
}

export default App;

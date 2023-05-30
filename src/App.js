import React from "react";
import TodoList from "./components/TodoList";
import './App.css'


function App(){ 
  return (
    <div className="todoApp">
      <h1>#todo</h1>
      <TodoList/>
    </div>
  );
}

export default App;
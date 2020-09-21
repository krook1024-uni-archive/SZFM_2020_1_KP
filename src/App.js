import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodoLists, addTodoList } from "./util/todos";

function App() {
  let todos = getTodoLists();
  return (
    <>
      <Header />
      <div className='TodosApp'>
        Lorem ipsum dolor sit amet...
        <TodoForm addTodoList={addTodoList} />
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;

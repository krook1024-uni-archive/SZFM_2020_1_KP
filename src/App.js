import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/todo-context";

function App() {
  return (
    <TodoProvider>
      <Header />
      <div className='TodosApp'>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;

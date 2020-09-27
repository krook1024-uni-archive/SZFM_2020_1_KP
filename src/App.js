import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { TodoProvider } from "./context/todo-context";

function App() {
  return (
    <TodoProvider>
      <Header />
      <TodoAdd />
      <div className="TodosApp">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;

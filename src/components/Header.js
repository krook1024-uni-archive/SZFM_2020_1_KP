import React, {useRef} from "react";
import "../styles/Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useTodoState, useTodoDispatch } from "../context/todo-context";


const Header = () => {
  let addRef = useRef()
  console.log(addRef)
  const dispatch = useTodoDispatch();
  const { lists, current } = useTodoState();
  console.log(lists)

  function addHandler(){
    let name = addRef.current.value;
    if (name === "") return;
    if (name.length < 3) {
      console.log("kevés");
      return;
    }
    if (name.length > 128) {
      console.log("sok");
      return;
    }
    console.log(name);
    addRef.current.value = null;

    const newTodoList = {
      name: name,
      todos: [],
    };
    dispatch({ type: "add_list", payload: newTodoList });
  }
  

  return (
    <div className="header-container">
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Todos
        </Dropdown.Toggle>
        <Dropdown.Menu align="left" className="dropdown-menu">
          <input className="inputField" ref={addRef} type="text" />
          <button className="addButton" onClick={addHandler}>Add</button>
        </Dropdown.Menu>
      </Dropdown>
      <h1 id="selected-list">Todo1</h1>
    </div>
  );
};



export default Header;

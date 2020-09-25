import React, { useRef } from "react";
import "../styles/Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useTodoState, useTodoDispatch } from "../context/todo-context";

const Header = () => {
  let addRef = useRef();
  const dispatch = useTodoDispatch();
  const { lists, current } = useTodoState();

  function addHandler() {
    let name = addRef.current.value;

    if (name !== "") {
      const newTodoList = {
        name: name,
        todos: [],
      };
      dispatch({ type: "add_list", payload: newTodoList });
    }
  }

  function selectCurrent(name) {
    let index = null;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === name) {
        index = i;
        dispatch({ type: "set_current", payload: index });
      }
    }
  }

  return (
    <div className="header-container">
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Todos
        </Dropdown.Toggle>
        <Dropdown.Menu align="left" className="dropdown-menu">
          {lists.map((value, index) => {
            return (
              <Dropdown.Item
                className="menu-item"
                onClick={() => selectCurrent(value.name)}
                key={index}
              >
                {value.name}
              </Dropdown.Item>
            );
          })}
          <>
            <input className="inputField" ref={addRef} type="text" />
            <button className="addButton" onClick={addHandler}>
              Add
            </button>
          </>
        </Dropdown.Menu>
      </Dropdown>
      <h1 id="selected-list">{current >= 0 ? lists[current].name: 'No TodoLists added yet.'}</h1>
    </div>
  );
};

export default Header;

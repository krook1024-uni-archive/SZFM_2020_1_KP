import React, { useRef } from "react";
import "../styles/Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useTodoState, useTodoDispatch } from "../context/todo-context";
import menuIcon from "../styles/icons/menu-icon.svg"

const Header = () => {
  let addRef = useRef();
  const dispatch = useTodoDispatch();
  const { lists, current } = useTodoState();

  const addHandler = (e) => {
    let name = addRef.current.value;

    if (name !== "") {
      const newTodoList = {
        name: name,
        todos: [],
      };
      dispatch({ type: "add_list", payload: newTodoList });
    }
    e.preventDefault()
  }

  function selectCurrent(index) {
    dispatch({ type: "set_current", payload: index });
    console.log(current);
  }

  return (
    <div className="header-container">
      <Dropdown className="dropdown">
        <Dropdown.Toggle className='menu-button' variant="success" id="dropdown-basic">
          <img src={menuIcon} alt='default'></img>
        </Dropdown.Toggle>
        <Dropdown.Menu align="left" className="dropdown-menu">
          {lists.map((value, index) => {
            return (
              <Dropdown.Item
                className="menu-item"
                onClick={() => selectCurrent(index)}
                key={index}
              >
                {value.name}
              </Dropdown.Item>
            );
          })}
          <div className='add-list-container'>
            <input className="inputField" ref={addRef} type="text" />
            <button className="addButton" onClick={(e) => addHandler(e)}>
              Add
            </button>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <h1 id="selected-list">
        {current < 0 ? "No todos yet." : lists[current].name}
      </h1>
    </div>
  );
};

export default Header;

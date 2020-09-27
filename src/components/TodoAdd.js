import React, { useRef } from "react";
import "../styles/TodoAdd.css";
import { useTodoState, useTodoDispatch } from "../context/todo-context";

export default function TodoAdd() {
  const todoNameRef = useRef();
  const { current } = useTodoState();
  const dispatch = useTodoDispatch();

  function handleAdding(e) {
    e.preventDefault();
    var name = todoNameRef.current.value;
    if (name === "" || name === null || name === undefined) return;
    if (name.length < 3) {
      console.log("kevés");
      return;
    }
    if (name.length > 128) {
      console.log("sok");
      return;
    }
    dispatch({
      type: "add_item",
      payload: {
        listId: current,
        item: {
          name,
          completed: false,
        },
      },
    });
    console.log(name);
    todoNameRef.current.value = null;
  }
  if (current === -1) {
    return null;
  }

  return (
    <form className="form">
      <input
        ref={todoNameRef}
        id="formInput"
        type="text"
        placeholder="What to do"
      ></input>
      <button id="formButton" onClick={handleAdding}>
        Add
      </button>
    </form>
  );
}

import React, { useRef } from "react";
import "../styles/TodoAdd.css";
import { useTodoState, useTodoDispatch } from "../context/todo-context";

export default function TodoAdd() {
  const todoNameRef = useRef();
  const { current } = useTodoState();
  const dispatch = useTodoDispatch();

  function handleAdding(e) {
    var name = todoNameRef.current.value;
    if (name === "") return;
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
    todoNameRef.current.value = null;
  }
  return (
    <>
      <input className="inputField" ref={todoNameRef} type="text" />
      <button onClick={handleAdding} className="addButton">
        Add
      </button>
    </>
  );
}

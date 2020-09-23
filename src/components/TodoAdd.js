import React, { useState, useRef } from "react";

export default function TodoAdd() {
  const todoNameRef = useRef();

  function handleAdding(e) {
    const name = todoNameRef.current.value;
    if (name == "") return;
    console.log(name);
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

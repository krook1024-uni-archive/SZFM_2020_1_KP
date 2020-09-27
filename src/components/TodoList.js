import React, { useState } from "react";
import { useTodoState, useTodoDispatch } from "../context/todo-context";
import { FormCheck } from "react-bootstrap";
import "../styles/TodoList.css"

const TodoList = () => {
  const { lists, current } = useTodoState();
  const dispatch = useTodoDispatch();

  function deleteRow(index) {
    dispatch({
      type: "delete_item",
      payload: {
        listId: current,
        itemId: index,
      },
    });
  }

  if (current !== -1) {
    return (
      <div>
        {lists[current].todos.map((value, index) => {
          return (
            <div className="todo-item" key={index} style={{ display: "flex" }}>
              <FormCheck></FormCheck>
              {value.name}
              <button
                onClick={() => {
                  deleteRow(index);
                }}
              >
                🗑
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  return <></>;
};

export default TodoList;

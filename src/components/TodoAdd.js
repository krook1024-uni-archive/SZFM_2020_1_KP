import React, { useRef } from "react";
import "../styles/TodoAdd.css";
import { useTodoState, useTodoDispatch } from "../context/todo-context";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <view style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}>
      <Form className="formMain" ref={todoNameRef}>
        <Form.Group controlId="formTodo">
          <Form.Control type="text" placeholder="ToDo Name" />
          <Button onClick={handleAdding} className="addButton">
            Add
          </Button>
        </Form.Group>
        <Form.Group>
          <Form.Text className="formHint">3-128 karakter</Form.Text>
        </Form.Group>
      </Form>
    </view>
  );
}

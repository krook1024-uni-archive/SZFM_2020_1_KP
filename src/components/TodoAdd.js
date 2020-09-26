import React, { useRef } from "react";
import "../styles/TodoAdd.css";
import { useTodoState, useTodoDispatch } from "../context/todo-context";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default function TodoAdd() {
  const todoNameRef = useRef();
  const { current } = useTodoState();
  const dispatch = useTodoDispatch();

  function handleAdding(e) {
    var name = todoNameRef.current.value;
    if ((todoNameRef.current = -1)) {
      return;
    }
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
    <view className="container">
      <InputGroup
        className="inputgroup"
        style={{ flex: 1, flexDirection: "row" }}
      >
        <FormControl
          ref={todoNameRef}
          className="formControll"
          placeholder="What to do?"
          type="text"
          color="#ffeb8f"
          aria-label="ToDo name"
          aria-describedby="basic-addon"
          style={{}}
        ></FormControl>

        <InputGroup.Append>
          <Button
            variant="danger"
            onClick={handleAdding}
            className="formButton"
            style={{}}
          >
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Form.Text className="formHint">
        Minimum 3 karakter, maximum 128 karakter
      </Form.Text>
    </view>
  );
}

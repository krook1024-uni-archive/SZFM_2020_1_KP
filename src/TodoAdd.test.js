import React from "react";
import ReactDOM from "react-dom";
import TodoAdd from "./components/TodoAdd";

it("renders without crash ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoAdd />, div);
});

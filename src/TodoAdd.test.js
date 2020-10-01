import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoAdd from "./components/TodoAdd";

require("./components/TodoAdd");

test("Nem megfelelő string", () => {
  expect(<TodoAdd />).toBe();
});
test("Rövid string ", () => {});
test("Túl hosszú string ", () => {});
test("Megfelelő string", () => {});
test("Current == -1 ", () => {});
test("Correct placement of TodoAdd ", () => {
  const { container } = render(<TodoAdd />);
  expect(container.parentNode).toHaveClass("App");
});
test("Correct place ", () => {});

import React from "react";
import {
  render,
  fireEvent,
  getQueriesForElement,
} from "@testing-library/react";
import TodoAdd from "./components/TodoAdd";

function render(ui) {
  const inputField = document.createElement("input");
  ReactDOM.render(ui, inputField);
  const queries = getQueriesForElement(inputField);

  return { inputField, ...queries };
}
test("Correct placement of TodoAdd ", () => {
  const { container } = render(<TodoAdd />);
  expect(container.parentNode).toHaveClass("App");
});
test("Have no child ", () => {
  const { container } = render(<TodoAdd />);
  expect(container.firstChild).toBe(null);
});
test("Renders button field correctly ", () => {
  const { getByText } = render(<TodoAdd />);
  const button = getByText("Add");

  expect(button).toBeEnabled();
});
test("Enables submit after valid input ", () => {
  const { getByTestId, getByText } = render(<TodoAdd />);
  const input = getByTestId("formInput");
  const button = getByText("Add");

  fireEvent.change(input, { target: { value: "Ez egy todo" } });
});

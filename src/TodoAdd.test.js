import React from "react";
import ReactDOM from "react-dom";
import TodoAdd from "./components/TodoAdd";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";
import "jest-dom/extend-expect";
afterEach(cleanup);

test("Correct placement of header component", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass("header-container");
});
test("Match with snapshot ", () => {
  const tree = renderer.create(<TodoAdd></TodoAdd>).toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders without crash ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoAdd />, div);
});
test("renders without crash ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoAdd />, div);
});
test("renders button correctly", () => {
  const { getByTestId } = render(<TodoAdd></TodoAdd>);
  expect(getByTestId("button")).toHaveTextContent("Add");
});
test("Correct placement of Add component", () => {
  const { container } = render(<App />);
  expect(container.childNodes[0]).toBe(undefined);
});

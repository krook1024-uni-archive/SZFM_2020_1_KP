import React from "react";
import {
  render,
  fireEvent,
  getQueriesForElement,
} from "@testing-library/react";
import { shallow } from "enzyme";
import TodoAdd from "./components/TodoAdd";
import { Button } from "react-bootstrap";

test("Correct placement of TodoAdd ", () => {
  const { container } = render(<TodoAdd />);
  expect(container.parentNode).toHaveClass("App");
});
test("Have no child ", () => {
  const { container } = render(<TodoAdd />);
  expect(container.firstChild).toBe(null);
});
test("test button click ", () => {
  const mockCallBack = jest.fn();
  const button = shallow(<Button onClick={mockCallBack}></Button>);
  button.find("button").simulate("click");
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
describe("TodoAdd", () => {
  it("should be defined", () => {
    expect(TodoAdd).toBeDefined();
  });
  it("should render correctly", () => {
    const tree = shallow(<TodoAdd name="buttonTest" />);
    expect(tree).toMatchSnapshot();
  });
  it("should have a button value", () => {
    const tree = shallow(<TodoAdd name="buttonTest" />);
    expect(typeof tree.find(".button").node.props.value).toBe("string");
    expect(tree.find(".button").node.props.value).toEqual("buttonTest");
  });
});

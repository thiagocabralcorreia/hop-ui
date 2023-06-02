import { render } from "@testing-library/react";
import React from "react";
import ExampleComponent from "../src/ExampleComponent";

test("renders example component correctly", () => {
  const { getByText } = render(<ExampleComponent />);
  const element = getByText("Example Component");
  expect(element).toBeInTheDocument();
});

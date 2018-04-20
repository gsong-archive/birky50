import React from "react";

import { render } from "react-testing-library";

import App from "../App";

test("App renders without crashing", () => {
  const { container } = render(<App />);
  expect(container.textContent).toMatch("Sam & Sue’s 50th Anniversary");
});

test("App renders", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

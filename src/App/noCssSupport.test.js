//@flow
import React from "react";

import { render } from "react-testing-library";

import {
  mockGetBaseFontSize,
  mockSupportsGrid,
  mockSupportsObjectFit,
} from "testUtils/mocks";

mockGetBaseFontSize.mock();
mockSupportsGrid(false);
mockSupportsObjectFit(false);

const App = require("./index").default;

test("App renders without crashing", () => {
  const { container } = render(<App />);

  expect(container.textContent).toMatch("Sam & Sue’s 50th Anniversary");
});

test("App renders", () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});

mockGetBaseFontSize.restore();

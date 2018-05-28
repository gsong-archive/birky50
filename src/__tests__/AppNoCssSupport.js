import React from "react";

import { render } from "react-testing-library";

import {
  mockGetBaseFontSize,
  mockSupportsGrid,
  mockSupportsObjectFit,
} from "testUtils/mocks";

import App from "../App";

mockGetBaseFontSize.mock();
mockSupportsGrid(false);
mockSupportsObjectFit(false);

test("App renders without crashing", () => {
  const { container } = render(<App />);

  expect(container.textContent).toMatch("Sam & Sue’s 50th Anniversary");
});

test("App renders", () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});

mockGetBaseFontSize.restore();

import React from "react";

import { render } from "react-testing-library";

import SectionHeader from "./index";

test("SectionHeader is rendered", () => {
  const { container } = render(<SectionHeader>I'm a child.</SectionHeader>);

  expect(container.firstChild).toMatchSnapshot();
});

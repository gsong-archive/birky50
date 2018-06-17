//@flow
import React from "react";

import { render } from "react-testing-library";

import Section from "./index";
import sections from "../../../data/sections";

test("Section is rendered", () => {
  const ref = React.createRef();
  const { container } = render(
    <Section data={sections[1]} forwardedRef={ref} />
  );

  expect(container.firstChild).toMatchSnapshot();
});

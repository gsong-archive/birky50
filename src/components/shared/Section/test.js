import React from "react";

import { render } from "react-testing-library";

import Section from "./index";

test("Section renders properly", () => {
  const ref = React.createRef();
  const { container } = render(
    <Section tag="section" id="id" ref={ref}>
      Child
    </Section>
  );

  expect(container.firstChild).toMatchSnapshot();
});
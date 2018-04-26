import React from "react";

import { render } from "react-testing-library";

import Section from "../Section";

test("Section renders properly", () => {
  const ref = React.createRef();
  const { container } = render(
    <Section id="id" ref={ref}>
      Child
    </Section>
  );

  expect(container.firstChild).toMatchSnapshot();
});

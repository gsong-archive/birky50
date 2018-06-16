import React from "react";

import { render } from "react-testing-library";

import Container from "./index";

test("SectionContainer renders properly", () => {
  const ref = React.createRef();
  const { container } = render(
    <Container tag="section" id="id" ref={ref}>
      Child
    </Container>
  );

  expect(container.firstChild).toMatchSnapshot();
});

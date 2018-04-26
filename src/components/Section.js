import React from "react";

import { Container } from "reactstrap";

import { SectionProvider } from "../contexts/SectionContext";

const forwardRef = (render, displayName = "") => {
  render.displayName = displayName;
  return React.forwardRef(render);
};

export default forwardRef(
  (props, ref) => (
    <SectionProvider id={props.id}>
      <section {...props} ref={ref}>
        <Container fluid className="p-md-4 py-4">
          {props.children}
        </Container>
      </section>
    </SectionProvider>
  ),
  "Section"
);

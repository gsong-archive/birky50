import React from "react";

import styled from "react-emotion";

import SectionContext from "../../contexts/SectionContext";

export default ({ children }) => (
  <SectionContext.Consumer>
    {id => <H1 id={`${id}-description`}>{children}</H1>}
  </SectionContext.Consumer>
);

const H1 = styled("h1")`
  margin-left: 1.4em;
  text-indent: -1.4em;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

import React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import SectionContext from "../../contexts/SectionContext";

export default ({ children }) => (
  <SectionContext.Consumer>
    {id => <H1 id={`${id}-description`}>{children}</H1>}
  </SectionContext.Consumer>
);

const breakpoints = [350];
const mq = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}px)`));

const H1 = styled("h1")(
  css`
    margin-left: 1.4em;
    text-indent: -1.4em;
    line-height: 1.1;
    margin-bottom: 1rem;
  `,
  mq({ fontSize: [null, "2.4rem"] })
);

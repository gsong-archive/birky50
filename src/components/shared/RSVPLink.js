import React from "react";

import styled from "react-emotion";

import { btn, btnLg } from "../../styles";
import { colors } from "../../styles/variables";

export default props => (
  <Link href="https://goo.gl/forms/SKdVBcUt7LUQmP1K2" {...props}>
    RSVP
  </Link>
);

const Link = styled("a")`
  color: white;
  font-weight: bold;
  background-color: ${colors.secondary};
  width: ${props => (props.width ? props.width : "auto")};
  ${btn};
  ${btnLg};
`;

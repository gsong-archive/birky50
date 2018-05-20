//@flow strict
import React from "react";

import styled from "react-emotion";

import { btn, btnLg } from "../../styles";
import { colors } from "../../styles/variables";

type Props = { className?: string, width?: string };

export default (props: Props) => (
  <Link href="https://goo.gl/forms/SKdVBcUt7LUQmP1K2" {...props}>
    RSVP
  </Link>
);

const Link = styled("a")`
  ${btn};
  ${btnLg};
  color: white;
  font-weight: bold;
  background-color: ${colors.secondary};
  width: ${props => (props.width ? props.width : "auto")};
`;

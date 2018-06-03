//@flow strict
import React from "react";

import styled from "react-emotion";

import { btnLg } from "../../../styles";

type Props = { className?: string, width?: string };

const RSVPLink = (props: Props) => (
  <Link href="https://goo.gl/forms/SKdVBcUt7LUQmP1K2" {...props}>
    RSVP
  </Link>
);

const Link = styled.a`
  ${btnLg};
  background-color: hsl(328, 85%, 48%);
  color: hsl(328, 85%, 95%);
  width: ${props => (props.width ? props.width : "auto")};
`;

export default RSVPLink;

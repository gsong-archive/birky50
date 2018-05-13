import styled from "react-emotion";

import { colors } from "./variables";

export const Bold = styled("span")`
  font-weight: bold;
`;

export const Link = styled("a")`
  color: ${colors.link};
  text-decoration: none;
`;

//@flow strict
import * as React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import SectionContext from "../../../contexts/SectionContext";
import { convertListToEm } from "../../utils";

import type { LabelComponent } from "../EmojiLabels";

type Props = { children: React.Element<LabelComponent> };

const SectionHeader = ({ children }: Props) => (
  <SectionContext.Consumer>
    {id => <H1 id={`${id}-description`}>{children}</H1>}
  </SectionContext.Consumer>
);

const breakpoints = convertListToEm([350]);
const mq = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}em)`));

const H1 = styled.h1(
  css`
    font-weight: normal;
    line-height: 1.1;
    margin: 0 0 1em;
  `,
  mq({ fontSize: ["1.75rem", "1.5rem"] })
);

export default SectionHeader;

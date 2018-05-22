//@flow strict
import * as React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import SectionContext from "../../contexts/SectionContext";

import type { LabelComponent } from "./EmojiLabels";

type Props = { children: React.Element<LabelComponent> };

const SectionHeader = ({ children }: Props) => (
  <SectionContext.Consumer>
    {id => <H1 id={`${id}-description`}>{children}</H1>}
  </SectionContext.Consumer>
);

const breakpoints = [350];
const mq = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}px)`));

const H1 = styled.h1(
  css`
    line-height: 1.1;
    margin-bottom: 1rem;
  `,
  mq({ fontSize: [null, "2.4rem"] })
);

export default SectionHeader;

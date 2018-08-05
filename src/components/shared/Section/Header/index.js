//@flow strict
import * as React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import SectionContext from "../../../../contexts/SectionContext";
import { calcSpacing, convertListToEm } from "../../../../styles/utils";

type Props = { color: string, children: React.Node };

export default ({ color, children }: Props) => (
  <SectionContext.Consumer>
    {id => (
      <Container
        className={css`
          border-top: 8px solid ${color};
        `}
      >
        <H1 id={`${id}-description`}>{children}</H1>
      </Container>
    )}
  </SectionContext.Consumer>
);

const breakpoints = convertListToEm([350]);
const mq = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}em)`));

const calcPaddingTopPx = (totalRows, fontSize) =>
  `${(calcSpacing(totalRows, fontSize) / 2) * 16}px`;

const Container = styled.div(
  css`
    position: sticky;
    top: 0;
    background-color: hsla(0, 0%, 100%, 0.8);
  `,
  mq({
    padding: [
      `${calcPaddingTopPx(3, 1.75)} 24px`,
      `${calcPaddingTopPx(2.5, 1.5)} 24px`,
    ],
  })
);

const H1 = styled.h1(
  css`
    font-weight: normal;
    margin: 0 0;
  `,
  mq({ fontSize: ["1.75rem", "1.5rem"] })
);

import React from "react";

import styled, { css } from "react-emotion";

import { getBaseFontSize } from "../styles/utils";
import WindowSizeContext, {
  WindowSizeProvider,
} from "../contexts/WindowSizeContext";

import "../styles/global";

export default () => {
  const base = getBaseFontSize();

  return (
    <WindowSizeProvider>
      <WindowSizeContext.Consumer>
        {width => (
          <div
            className={css`
              ${flex};
              height: 100vh;
            `}
          >
            <Header />
            <main
              className={css`
                ${flex};
                flex: 1;
              `}
            >
              <Section color="red" mq={px}>
                <h1>{px}</h1>
              </Section>
              <Section color="green" mq={em}>
                <h1>
                  {em} ({base * multiplier}px)
                </h1>
              </Section>
              <Section color="blue" mq={rem}>
                <h1>
                  {rem} ({base * multiplier}px)
                </h1>
              </Section>
            </main>
          </div>
        )}
      </WindowSizeContext.Consumer>
    </WindowSizeProvider>
  );
};

const multiplier = 40;
const px = `@media (min-width: ${16 * multiplier}px)`;
const em = `@media (min-width: ${multiplier}em)`;
const rem = `@media (min-width: ${multiplier}rem)`;

const Header = () => (
  <header>
    <h2>device pixel ratio: {window.devicePixelRatio}</h2>
    <h2>viewport width: {window.innerWidth}px</h2>
    <h2>base font-size: {getBaseFontSize()}px</h2>
  </header>
);

const Section = styled.div(
  props => css`
    flex: 1;
    background: ${props.color};
    ${props.mq} {
      opacity: 0.5;
    }
  `
);

const flex = css`
  display: flex;
  flex-direction: column;
`;

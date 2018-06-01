import React from "react";

import styled, { css } from "react-emotion";

import { getBaseFontSize } from "../styles/utils";
import WindowSizeContext, {
  WindowSizeProvider,
} from "../contexts/WindowSizeContext";

import "../styles/global";

const multiplier = 50;
const pxMq = `@media (min-width: ${16 * multiplier}px)`;
const emMq = `@media (min-width: ${multiplier}em)`;
const remMq = `@media (min-width: ${multiplier}rem)`;

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
              <Section color="red" mq={pxMq}>
                <h1>{pxMq}</h1>
              </Section>
              <Section color="green" mq={emMq}>
                <h1>
                  {emMq} ({base * multiplier}px)
                </h1>
              </Section>
              <Section color="blue" mq={remMq}>
                <h1>
                  {remMq} ({base * multiplier}px)
                </h1>
              </Section>
            </main>
          </div>
        )}
      </WindowSizeContext.Consumer>
    </WindowSizeProvider>
  );
};

class Header extends React.Component {
  state = { em: 0, rem: 0 };
  em = React.createRef();
  rem = React.createRef();

  componentDidMount = () => {
    this.setState({
      em: getFontSize(this.em.current),
      rem: getBaseFontSize(this.rem.current),
    });
  };

  render = () => (
    <header>
      <h2>user-agent: {navigator.userAgent}</h2>
      <h2>device pixel ratio: {window.devicePixelRatio}</h2>
      <h2>viewport width: {window.innerWidth}px</h2>
      <h2>base font-size: {getBaseFontSize()}px</h2>
      <p
        ref={this.em}
        className={css`
          font-size: 1em;
        `}
      >
        I'm 1em: {this.state.em}px
      </p>
      <p
        className={css`
          font-size: 1rem;
        `}
      >
        I'm 1rem: {this.state.rem}px
      </p>
    </header>
  );
}

const Section = styled.div(
  props => css`
    flex: 1;
    color: white;
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

const getFontSize = el => parseFloat(window.getComputedStyle(el).fontSize);

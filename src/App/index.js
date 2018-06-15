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
            <section
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
            </section>
          </div>
        )}
      </WindowSizeContext.Consumer>
    </WindowSizeProvider>
  );
};

class Header extends React.Component {
  state = { em: 0, rem: 0 };
  em = React.createRef();
  px = React.createRef();
  rem = React.createRef();

  componentDidMount = () => {
    this.setState({
      em: getFontSize(this.em.current),
      px: getFontSize(this.px.current),
      rem: getFontSize(this.rem.current),
    });
  };

  render = () => {
    const attributes = {
      "user-agent": navigator.userAgent,
      "device pixel ratio": window.devicePixelRatio,
      "screen width": `${window.screen.width}px`,
      "screen height": `${window.screen.height}px`,
      "viewport width": `${document.documentElement.clientWidth}px`,
      "viewport height": `${document.documentElement.clientHeight}px`,
      "base font-size": `${getBaseFontSize()}px`,
    };

    return (
      <header>
        <table className={table}>
          <tbody>
            {Object.entries(attributes).map(([attrName, attrValue], index) => (
              <tr key={index}>
                <td
                  className={css`
                    min-width: 10rem;
                  `}
                >
                  {attrName}
                </td>
                <td>{attrValue}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          ref={this.px}
          className={css`
            font-size: 16px;
          `}
        >
          I’m 16px: {this.state.px}px
        </p>
        <p
          ref={this.em}
          className={css`
            font-size: 1em;
          `}
        >
          I’m 1em: {this.state.em}px
        </p>
        <p
          ref={this.rem}
          className={css`
            font-size: 1rem;
          `}
        >
          I’m 1rem: {this.state.rem}px
        </p>
      </header>
    );
  };
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

const table = css`
  font-size: 1.1rem;
  border-collapse: collapse;
  tr td {
    border: 1px solid gray;
  }
`;

const getFontSize = el => parseFloat(window.getComputedStyle(el).fontSize);

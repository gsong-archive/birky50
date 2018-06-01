import React from "react";

import styled, { css } from "react-emotion";

import NavMenu from "../components/NavMenu";
import Section from "../components/Section";
import WindowSizeContext, {
  WindowSizeProvider,
} from "../contexts/WindowSizeContext";
import sections from "../data/sections";
import { getBaseFontSize } from "../styles/utils";

import "../styles/global";

import type { SectionDatum } from "../components/Section.type";

const multiplier = 50;
const pxMq = `@media (min-width: ${16 * multiplier}px)`;
const emMq = `@media (min-width: ${multiplier}em)`;
const remMq = `@media (min-width: ${multiplier}rem)`;

export default class App extends React.Component<{}> {
  _refs = {};

  render = () => {
    const base = getBaseFontSize();
    return (
      <WindowSizeProvider>
        <WindowSizeContext.Consumer>
          {width => (
            <div
              className={css`
                ${flex};
              `}
            >
              <Header />
              <main
                className={css`
                  ${flex};
                `}
              >
                <MqSection color="red" mq={pxMq}>
                  <div>{pxMq}</div>
                </MqSection>
                <MqSection color="green" mq={emMq}>
                  <div>
                    {emMq} ({base * multiplier}px)
                  </div>
                </MqSection>
                <MqSection color="blue" mq={remMq}>
                  <div>
                    {remMq} ({base * multiplier}px)
                  </div>
                </MqSection>
              </main>
            </div>
          )}
        </WindowSizeContext.Consumer>

        <NavMenu sections={sections} onClick={this.scrollTo} />
        {sections.map(this.renderSection)}
      </WindowSizeProvider>
    );
  };

  renderSection = (
    {
      id,
      sectionLabel,
      sectionTag,
      SectionComponent,
      LabelComponent,
    }: SectionDatum,
    i: number
  ) => {
    // flowlint-next-line sketchy-null-string:off
    const tag = sectionTag ? sectionTag : "section";
    const style = this._getStyle(i);
    this._refs[id] = React.createRef();

    return (
      <Section
        id={id}
        ref={this._refs[id]}
        key={id}
        tag={tag}
        className={style}
        aria-labelledby={`${id}-description`}
      >
        <SectionComponent
          LabelComponent={LabelComponent}
          sectionLabel={sectionLabel}
        />
      </Section>
    );
  };

  scrollTo = (ref: string) => (
    event: SyntheticMouseEvent<HTMLLinkElement>
  ): void => {
    event.preventDefault();
    window.history.pushState(null, null, `#${ref}`);
    this._refs[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  _getStyle = (index: number) =>
    index % 2 === 0
      ? css({ backgroundColor: "rgba(64, 60, 127, 0.2)" })
      : css({ backgroundColor: "rgba(182, 174, 71, 0.2)" });
}

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

  render = () => (
    <header>
      <p>user-agent: {navigator.userAgent}</p>
      <p>device pixel ratio: {window.devicePixelRatio}</p>
      <p>viewport width: {window.innerWidth}px</p>
      <p>base font-size: {getBaseFontSize()}px</p>
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
}

const MqSection = styled.div(
  props => css`
    flex: 1 1 auto;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    background: ${props.color};
    padding: 1rem;
    ${props.mq} {
      opacity: 0.25;
      font-size: 1rem;
      font-weight: normal;
      font-style: italic;
    }
  `
);

const flex = css`
  display: flex;
  flex-direction: column;
`;

const getFontSize = el => parseFloat(window.getComputedStyle(el).fontSize);

//@flow
import React from "react";

import { css } from "emotion";

import "./styles/global";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Section from "./components/Section";
import sections from "./data/sections";
import { WindowSizeProvider } from "./contexts/WindowSizeContext";

import type { SectionDatum } from "./components/SectionTypes";

export default class App extends React.Component<{}> {
  _refs = {};

  render = () => (
    // $FlowFixMe
    <React.StrictMode>
      <WindowSizeProvider>
        <Header />
        <NavMenu sections={sections} onClick={this.scrollTo} />
        {sections.map(this.renderSection)}
      </WindowSizeProvider>
    </React.StrictMode>
  );

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
      ? css`
          background-color: rgba(64, 60, 127, 0.2);
        `
      : css`
          background-color: rgba(182, 174, 71, 0.2);
        `;
}

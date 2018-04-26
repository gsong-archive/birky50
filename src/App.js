import React from "react";

import { css } from "emotion";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Section from "./components/Section";
import sections from "./data/sections";
import { WindowSizeProvider } from "./contexts/WindowSizeContext";

import "./App.css";

export default class App extends React.Component {
  _refs = {};

  render = () => (
    <React.StrictMode>
      <WindowSizeProvider>
        <Header />
        <nav>
          <NavMenu sections={sections} onClick={this.scrollTo} />
        </nav>
        {this.renderSections()}
      </WindowSizeProvider>
    </React.StrictMode>
  );

  renderSections = () => {
    const renderedSections = sections.map(this.renderSection);
    return renderedSections;
  };

  renderSection = (
    { id, sectionLabel, SectionComponent, LabelComponent },
    i
  ) => {
    const style = i % 2 === 0 ? backgroundColor1 : backgroundColor2;
    this._refs[id] = React.createRef();
    return (
      <Section
        id={id}
        ref={this._refs[id]}
        key={id}
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

  scrollTo = ref => event => {
    event.preventDefault();
    window.history.pushState(null, null, `#${ref}`);
    this._refs[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
}

const backgroundColor1 = css`
  background-color: rgba(64, 60, 127, 0.2);
`;
const backgroundColor2 = css`
  background-color: rgba(182, 174, 71, 0.2);
`;

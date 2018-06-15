//@flow
import React from "react";

import "../styles/global";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import Section from "../components/shared/Section";
import SectionDetail from "../components/shared/Section/Detail";
import SectionHeader from "../components/shared/Section/Header";
import sections from "../data/sections";
import { WindowSizeProvider } from "../contexts/WindowSizeContext";

import type { SectionDatum } from "../components/Section.type";

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
      color,
    }: SectionDatum,
    i: number
  ) => {
    // flowlint-next-line sketchy-null-string:off
    const tag = sectionTag ? sectionTag : "section";
    this._refs[id] = React.createRef();

    return (
      <Section
        tag={tag}
        id={id}
        key={id}
        ref={this._refs[id]}
        aria-labelledby={`${id}-description`}
      >
        <SectionHeader color={color}>
          <LabelComponent label={sectionLabel} />
        </SectionHeader>
        <SectionDetail>
          <SectionComponent />
        </SectionDetail>
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
}

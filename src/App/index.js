//@flow
import React from "react";

import "../styles/global";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import Section from "../components/shared/Section";
import sections from "../data/sections";
import { WindowSizeProvider } from "../contexts/WindowSizeContext";

export default class App extends React.Component<{}> {
  _refs = {};

  render = () => (
    // $FlowFixMe
    <React.StrictMode>
      <WindowSizeProvider>
        <Header />
        <NavMenu sections={sections} onClick={this.scrollTo} />
        {sections.map((section, i) => {
          this._refs[section.id] = React.createRef();

          return (
            <Section
              key={section.id}
              forwardedRef={this._refs[section.id]}
              data={section}
            />
          );
        })}
      </WindowSizeProvider>
    </React.StrictMode>
  );

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

import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { css } from "emotion";

import ActivityList from "./components/ActivityList";
import Airport from "./components/Airport";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import LodgingList from "./components/LodgingList";
import { WindowSizeProvider } from "./contexts/WindowSizeContext";
import {
  Airplane,
  Burger,
  Hotel,
  PartyHat,
  WomanBiking,
  WomanRaisingHand
} from "./components/shared/EmojiLabels";

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
    const sectionProps = { LabelComponent, sectionLabel };
    this._refs[id] = React.createRef();
    return (
      <Section id={id} className={style} ref={this._refs[id]} key={id}>
        <SectionComponent {...sectionProps} />
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

const NavMenu = ({ sections, onClick }) => {
  const navItems = sections.map(({ id, navLabel, LabelComponent }) => (
    <NavItem key={id}>
      <NavLink href={`#${id}`} onClick={onClick(id)}>
        <LabelComponent label={navLabel} />
      </NavLink>
    </NavItem>
  ));

  return <Nav fill={true}>{navItems}</Nav>;
};

const forwardRef = (render, displayName = "") => {
  render.displayName = displayName;
  return React.forwardRef(render);
};

const Section = forwardRef(
  (props, ref) => (
    <section id={props.id} ref={ref} className={props.className}>
      <Container fluid className="p-md-4 py-4">
        {props.children}
      </Container>
    </section>
  ),
  "Section"
);

const sections = [
  {
    id: "event",
    navLabel: "Details",
    sectionLabel: "Celebration Details",
    SectionComponent: Event,
    LabelComponent: PartyHat
  },
  {
    id: "airport",
    navLabel: "Airport",
    sectionLabel: "Where to Fly Into?",
    SectionComponent: Airport,
    LabelComponent: Airplane
  },
  {
    id: "lodgingList",
    navLabel: "Lodging",
    sectionLabel: "Where to Stay?",
    SectionComponent: LodgingList,
    LabelComponent: Hotel
  },
  {
    id: "foodList",
    navLabel: "Food",
    sectionLabel: "Where to Eat?",
    SectionComponent: FoodList,
    LabelComponent: Burger
  },
  {
    id: "activityList",
    navLabel: "Activities",
    sectionLabel: "What to Do?",
    SectionComponent: ActivityList,
    LabelComponent: WomanBiking
  },
  {
    id: "contactUs",
    navLabel: "Questions?",
    sectionLabel: "Questions?",
    SectionComponent: ContactUs,
    LabelComponent: WomanRaisingHand
  }
];

const backgroundColor1 = css`
  background-color: rgba(64, 60, 127, 0.2);
`;
const backgroundColor2 = css`
  background-color: rgba(182, 174, 71, 0.2);
`;

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

export default class App extends React.PureComponent {
  render = () => (
    <React.StrictMode>
      <WindowSizeProvider>
        <Header />
        <NavMenu sections={sections} onClick={this.scrollTo} />
        {this.renderSections()}
      </WindowSizeProvider>
    </React.StrictMode>
  );

  renderSections = () => {
    const renderedSections = Object.entries(sections).map(this.renderSection);
    return renderedSections;
  };

  renderSection = ([ref, { component }], i) => {
    const style = i % 2 === 0 ? backgroundColor1 : backgroundColor2;
    this[ref] = React.createRef();
    return (
      <Section className={style} sectionRef={this[ref]} key={i}>
        {component}
      </Section>
    );
  };

  scrollTo = ref => () => {
    this[ref].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

const NavMenu = ({ sections, onClick }) => {
  const navItems = Object.entries(sections).map(([ref, { label }], i) => (
    <NavItem key={i}>
      <NavLink href="#" onClick={onClick(ref)}>
        {label}
      </NavLink>
    </NavItem>
  ));

  return <Nav fill={true}>{navItems}</Nav>;
};

class Section extends React.PureComponent {
  render = () => (
    <div ref={this.props.sectionRef} className={this.props.className}>
      <Container fluid className="p-md-4 py-4">
        {this.props.children}
      </Container>
    </div>
  );
}

const sections = {
  event: {
    component: <Event />,
    label: <PartyHat label="Details" />
  },
  airport: {
    component: <Airport />,
    label: <Airplane label="Airport" />
  },
  lodgingList: {
    component: <LodgingList />,
    label: <Hotel label="Lodging" />
  },
  foodList: {
    component: <FoodList />,
    label: <Burger label="Food" />
  },
  activityList: {
    component: <ActivityList />,
    label: <WomanBiking label="Activities" />
  },
  contactUs: {
    component: <ContactUs />,
    label: <WomanRaisingHand label="Questions?" />
  }
};

const backgroundColor1 = css`
  background-color: rgba(64, 60, 127, 0.2);
`;
const backgroundColor2 = css`
  background-color: rgba(182, 174, 71, 0.2);
`;

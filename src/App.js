import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";

import ActivityList from "./components/ActivityList";
import Airport from "./components/Airport";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import LodgingList from "./components/LodgingList";
import WindowSizeProvider from "./providers/WindowSizeProvider";

import "./App.css";

export default class App extends React.PureComponent {
  render = () => (
    <WindowSizeProvider>
      <Header />
      <NavMenu sections={sections} onClick={this.scrollTo} />
      {this.renderSections()}
    </WindowSizeProvider>
  );

  renderSections = () => {
    const renderedSections = Object.entries(sections).map(this.renderSection);
    return renderedSections;
  };

  renderSection = ([ref, { component }], i) => {
    const backgroundColor1 = "rgba(64, 60, 127, 0.2)";
    const backgroundColor2 = "rgba(182, 174, 71, 0.2)";
    const bgColor = i % 2 === 0 ? backgroundColor1 : backgroundColor2;
    const style = { backgroundColor: bgColor };

    return (
      <div ref={el => (this[ref] = el)} key={i}>
        <Container fluid className="p-md-4 py-4" style={style}>
          {component}
        </Container>
      </div>
    );
  };

  scrollTo = ref => () => {
    this[ref].scrollIntoView({ behavior: "smooth", block: "start" });
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

const sections = {
  event: { component: <Event />, label: "🎉 Details" },
  airport: { component: <Airport />, label: "✈️ Airport" },
  lodgingList: { component: <LodgingList />, label: "🏩 Lodging" },
  foodList: { component: <FoodList />, label: "🍔 Food" },
  activityList: { component: <ActivityList />, label: "🚴🏽‍♀️ Activities" },
  contactUs: { component: <ContactUs />, label: "🙋🏻‍♀️ Questions?" }
};

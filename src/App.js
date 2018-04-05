import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { Provider, Subscribe } from "unstated";

import ActivityList from "./components/ActivityList";
import Airport from "./components/Airport";
import AppContainer from "./components/AppContainer";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import LodgingList from "./components/LodgingList";
import WindowSizeContainer from "./containers/WindowSizeContainer";
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
    <Provider>
      <Subscribe to={[WindowSizeContainer]}>
        {container => (
          <AppContainer
            updateWindowDimensions={container.updateWindowDimensions}
          >
            <Header />
            <NavMenu sections={sections} onClick={this.scrollTo} />
            {this.renderSections()}
          </AppContainer>
        )}
      </Subscribe>
    </Provider>
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

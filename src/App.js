import React from "react";

import { Container } from "reactstrap";

import ActivityList from "./components/ActivityList";
import Airport from "./components/Airport";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import LodgingList from "./components/LodgingList";

import "./App.css";

export default () => {
  const backgroundColor1 = "rgba(64, 60, 127, 0.2)";
  const backgroundColor2 = "rgba(182, 174, 71, 0.2)";
  const sectionComponents = [
    <Event />,
    <Airport />,
    <LodgingList />,
    <FoodList />,
    <ActivityList />,
    <ContactUs />
  ];
  const sections = sectionComponents.map((item, i) => {
    const bgColor = i % 2 === 0 ? backgroundColor1 : backgroundColor2;
    const style = { backgroundColor: bgColor };
    return (
      <Container fluid className="p-md-4 py-4" style={style} key={i}>
        {item}
      </Container>
    );
  });

  return (
    <div>
      <Header />
      {sections}
    </div>
  );
};

import React from "react";

import ActivityList from "./components/ActivityList";
import Airport from "./components/Airport";
import ContactUs from "./components/ContactUs";
import Event from "./components/Event";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import LodgingList from "./components/LodgingList";

import "./App.css";

export default () => (
  <div>
    <Header />
    <Event />
    <Airport />
    <LodgingList />
    <FoodList />
    <ActivityList />
    <ContactUs />
  </div>
);

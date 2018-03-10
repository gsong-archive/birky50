import React from "react";

import Event from "./components/Event";
import Header from "./components/Header";
import LodgingList from "./components/LodgingList";
import ActivityList from "./components/ActivityList";

import "./App.css";

export default () => (
  <div>
    <Header />
    <Event />
    <LodgingList />
    <ActivityList />
  </div>
);

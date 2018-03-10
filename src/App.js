import React from "react";

import LodgingList from "./components/LodgingList";
import Header from "./components/Header";
import Event from "./components/Event";

import "./App.css";

export default () => (
  <div>
    <Header />
    <Event />
    <LodgingList />
  </div>
);

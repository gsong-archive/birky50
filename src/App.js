import React from "react";

import LodgingList from "./components/LodgingList";
import Header from "./components/Header";
import Venue from "./components/Venue";

import "./App.css";

export default () => (
  <div>
    <Header />
    <Venue />
    <LodgingList />
  </div>
);

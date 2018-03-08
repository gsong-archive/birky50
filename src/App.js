import React from "react";

import LodgingList from "./components/LodgingList";
import Marquee from "./components/Marquee";
import Venue from "./components/Venue";

import "./App.css";

export default () => (
  <div>
    <Marquee />
    <Venue />
    <LodgingList />
  </div>
);

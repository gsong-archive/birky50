//@flow strict
import React from "react";

import CardList from "./shared/CardList";
import LODGINGS from "../data/lodgings.js";

export default () => <CardList items={LODGINGS} />;

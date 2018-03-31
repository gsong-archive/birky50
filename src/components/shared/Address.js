import React from "react";

import { Location } from "./EmojiLabels";

import "./Address.css";

export default ({ address, url }) => (
  <div className="address-link">
    <Location label={<a href={url}>{address}</a>} />
  </div>
);

import React from "react";

import { Phone } from "./EmojiLabels";

export default ({ number }) => (
  <div>
    <Phone label={<a href={`tel:${number}`}>{number}</a>} />
  </div>
);

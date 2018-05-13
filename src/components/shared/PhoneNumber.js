import React from "react";

import { Link } from "../../styles/components";
import { Phone } from "./EmojiLabels";

export default ({ number }) => (
  <div>
    <Phone label={<Link href={`tel:${number}`}>{number}</Link>} />
  </div>
);

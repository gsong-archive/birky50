//@flow strict
import React from "react";

import { Link } from "../../styles/components";
import { Phone } from "./EmojiLabels";

type Props = { number: string };

export default ({ number }: Props) => (
  <div>
    <Phone label={<Link href={`tel:${number}`}>{number}</Link>} />
  </div>
);

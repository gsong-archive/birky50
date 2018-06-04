//@flow strict
import React from "react";

import { Link } from "../../../styles/components";
import { Location } from "../EmojiLabels";

type Props = {
  address: string,
  /** Link to map */
  url: string,
};

/**
 * Render an address set inside a link (preferably a map)
 */
export default ({ address, url }: Props) => (
  <div>
    <Location label={<Link href={url}>{address}</Link>} />
  </div>
);

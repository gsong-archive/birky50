//@flow strict
import React from "react";

import { Link } from "../../styles/components";
import { Location } from "./EmojiLabels";

type Props = {
  address: string,
  url: string,
};

export default ({ address, url }: Props) => (
  <div>
    <Location label={<Link href={url}>{address}</Link>} />
  </div>
);

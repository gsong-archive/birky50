import React from "react";

import { css } from "emotion";

import { Link } from "../../styles/components";
import { Location } from "./EmojiLabels";

export default ({ address, url }) => (
  <div
    className={css`
      margin-left: 1.5rem;
      text-indent: -1.5rem;
    `}
  >
    <Location label={<Link href={url}>{address}</Link>} />
  </div>
);

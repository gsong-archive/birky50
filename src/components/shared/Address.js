//@flow strict
import React from "react";

import { css } from "emotion";

import { Link } from "../../styles/components";
import { Location } from "./EmojiLabels";

type Props = {
  address: string,
  url: string
};

export default ({ address, url }: Props) => (
  <div
    className={css`
      margin-left: 1.5em;
      text-indent: -1.5em;
    `}
  >
    <Location label={<Link href={url}>{address}</Link>} />
  </div>
);

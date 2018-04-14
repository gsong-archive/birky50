import React from "react";

import { css } from "emotion";

import { Location } from "./EmojiLabels";

const style = css`
  padding-left: 1.5rem;
  text-indent: -1.5rem;
`;

export default ({ address, url }) => (
  <div className={style}>
    <Location label={<a href={url}>{address}</a>} />
  </div>
);

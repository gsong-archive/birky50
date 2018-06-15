//@flow strict
import React from "react";

import { css } from "emotion";

import { Airport } from "./shared/EmojiLabels";
import { Link } from "../styles/components";
import { textColors } from "../styles/variables";

export default () => (
  <React.Fragment>
    <Airport
      label={
        <Link href="http://www.iflyglacier.com" rel="nofollow">
          Glacier Park International Airport
        </Link>
      }
    />
    <p>
      <span
        className={css`
          color: ${textColors.lightGray};
        `}
      >
        Code:
      </span>{" "}
      <span
        className={css`
          font-weight: bold;
        `}
      >
        FCA
      </span>
    </p>
  </React.Fragment>
);

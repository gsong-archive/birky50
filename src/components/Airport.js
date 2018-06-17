//@flow strict
import React from "react";

import { css } from "emotion";

import { Airport } from "./shared/EmojiLabels";
import { Link } from "../styles/components";
import { calcSpacing } from "../styles/utils";
import { textColors } from "../styles/variables";
import { bold } from "../styles";

export default () => (
  <React.Fragment>
    <Airport
      label={
        <Link href="http://www.iflyglacier.com" rel="nofollow">
          Glacier Park International Airport
        </Link>
      }
    />
    <p
      className={css`
        margin: ${calcSpacing(1.5)}rem 0 0;
      `}
    >
      <span
        className={css`
          color: ${textColors.lightGray};
        `}
      >
        Code:
      </span>{" "}
      <span className={bold}>FCA</span>
    </p>
  </React.Fragment>
);

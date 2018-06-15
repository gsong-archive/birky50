//@flow strict
import React from "react";

import { css } from "emotion";

import SectionHeader from "./shared/Section/Header";
import { Airport } from "./shared/EmojiLabels";
import { Link } from "../styles/components";
import { textColors } from "../styles/variables";

import type { Props } from "./Section.type";

export default ({ LabelComponent, sectionLabel }: Props) => (
  <React.Fragment>
    <SectionHeader>
      <LabelComponent label={sectionLabel} />
    </SectionHeader>
    <div>
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
    </div>
  </React.Fragment>
);

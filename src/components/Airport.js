import React from "react";

import SectionHeader from "./shared/SectionHeader";
import { Airport } from "./shared/EmojiLabels";
import { Bold } from "../styles/components";
import { Link } from "../styles/components";

export default ({ LabelComponent, sectionLabel }) => (
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
        <Bold>Code</Bold>: FCA
      </p>
    </div>
  </React.Fragment>
);

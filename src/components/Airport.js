import React from "react";

import { Row, Col } from "reactstrap";

import SectionHeader from "./shared/SectionHeader";
import { Airport } from "./shared/EmojiLabels";

export default ({ LabelComponent, sectionLabel }) => (
  <Row>
    <Col>
      <SectionHeader>
        <LabelComponent label={sectionLabel} />
      </SectionHeader>
      <div>
        <Airport
          label={
            <a href="http://www.iflyglacier.com" rel="nofollow">
              Glacier Park International Airport
            </a>
          }
        />
        <p>
          <span className="font-weight-bold">Code</span>: FCA
        </p>
      </div>
    </Col>
  </Row>
);

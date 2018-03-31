import React from "react";

import { Row, Col } from "reactstrap";

import { Airplane, Airport } from "./shared/EmojiLabels";

export default () => (
  <Row>
    <Col>
      <h1>
        <Airplane label="Where to Fly Into?" />
      </h1>
      <div>
        <Airport
          label={
            <a href="http://www.iflyglacier.com">
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

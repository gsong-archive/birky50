import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFighterJet from "@fortawesome/fontawesome-free-solid/faFighterJet";
import { Container, Row, Col } from "reactstrap";

export default () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Where to Fly Into?</h1>
        <div>
          <FontAwesomeIcon icon={faFighterJet} />
          <a href="http://www.iflyglacier.com" className="after-fa">
            Glacier Park International Airport
          </a>
          <p>
            <span className="font-weight-bold">Code</span>: FCA
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

import React from "react";

import { Container, Row, Col, CardDeck } from "reactstrap";

import Lodging from "./Lodging";
import LODGINGS from "../data/lodgings.js";

export default () => {
  const lodgindCards = LODGINGS.map((lodging, i) => (
    <Lodging key={i} {...lodging} />
  ));

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Where to Stay?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>{lodgindCards}</CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

import React from "react";

import { Container, Row, Col, CardDeck } from "reactstrap";

import Card from "./shared/Card";
import LODGINGS from "../data/lodgings.js";

export default () => {
  const lodgindCards = LODGINGS.map((lodging, i) => (
    <Card key={i} {...lodging} />
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

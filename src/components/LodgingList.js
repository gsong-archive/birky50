import React from "react";

import { Container, Row, Col, CardDeck } from "reactstrap";

import Lodging from "./Lodging";

export default () => (
  <Container fluid>
    <Row>
      <Col>
        <h1>Where to Stay?</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <CardDeck>
          <Lodging />
          <Lodging />
          <Lodging />
          <Lodging />
          <Lodging />
          <Lodging />
        </CardDeck>
      </Col>
    </Row>
  </Container>
);

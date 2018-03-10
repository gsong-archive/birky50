import React from "react";

import { Container, Row, Col, CardDeck } from "reactstrap";

import Card from "./Card";

export default ({ title, items }) => {
  const cards = items.map((item, i) => <Card key={i} {...item} />);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>{cards}</CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

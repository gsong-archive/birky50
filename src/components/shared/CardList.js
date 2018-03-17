import React from "react";

import { Row, Col, CardDeck } from "reactstrap";

import Card from "./Card";

export default ({ title, items }) => {
  const cards = items.map((item, i) => <Card key={i} {...item} />);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

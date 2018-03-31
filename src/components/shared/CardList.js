import React from "react";

import { Row, Col, CardDeck } from "reactstrap";

import Card from "./Card";
import SectionHeader from "./SectionHeader";

export default ({ title, items }) => {
  const cards = items.map((item, i) => <Card key={i} {...item} />);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <SectionHeader>{title}</SectionHeader>
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

import React from "react";

import styled from "react-emotion";
import { Row, Col } from "reactstrap";

import Card from "./Card";
import SectionHeader from "./SectionHeader";
import WindowSizeContext from "../../contexts/WindowSizeContext";

export default ({ title, items }) => {
  const cards = items.map((item, i) => <Card key={i} {...item} />);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <SectionHeader>{title}</SectionHeader>
        </Col>
      </Row>
      <WindowSizeContext.Consumer>
        {({ width }) => {
          const numberOfColumns = Math.max(1, Math.floor(width / 275));
          const style = {
            gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`
          };

          return <CardContainer style={style}>{cards}</CardContainer>;
        }}
      </WindowSizeContext.Consumer>
    </React.Fragment>
  );
};

const CardContainer = styled("div")`
  display: grid;
  grid-gap: 1.5rem;
`;

import React from "react";

import { Jumbotron, Container } from "reactstrap";
import { Subscribe } from "unstated";

import { calculateBackgroundOffset } from "./utils";
import WindowSizeContainer from "../containers/WindowSizeContainer";

import "./Header.css";

export default class Header extends React.PureComponent {
  render = () => (
    <Subscribe to={[WindowSizeContainer]}>{this.renderHeader}</Subscribe>
  );

  renderHeader = container => {
    const { width } = container.state;
    const { offsetX, offsetY } = calculateBackgroundOffset(width);
    const backgroundPositionX = `${offsetX}px`;
    const backgroundPositionY = `${offsetY}px`;

    return (
      <Jumbotron fluid style={{ backgroundPositionX, backgroundPositionY }}>
        <Container fluid>
          <h1 className="header-title text-white">
            Sam & Sue’s 50th Anniversary
          </h1>
          <p className="lead text-white">Saturday, June 23, 2018</p>
          <p className="lead text-white">Somers, Montana</p>
          <a
            href="https://goo.gl/forms/SKdVBcUt7LUQmP1K2"
            className="btn btn-secondary btn-lg"
          >
            RSVP
          </a>
        </Container>
      </Jumbotron>
    );
  };
}

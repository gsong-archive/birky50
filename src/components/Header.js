import React from "react";

import { Jumbotron, Container } from "reactstrap";

import { Consumer } from "../providers/WindowSizeProvider";
import { calculateBackgroundOffset } from "./utils";

import "./Header.css";

export default class Header extends React.PureComponent {
  render = () => <Consumer>{this.renderHeader}</Consumer>;

  renderHeader = ({ width }) => {
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

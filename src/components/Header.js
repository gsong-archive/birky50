import React from "react";

import { Jumbotron, Container } from "reactstrap";
import { Subscribe } from "unstated";

import { calculateBackgroundOffset } from "./utils";
import WindowSizeContainer from "../containers/WindowSizeContainer";

import "./Header.css";

export default class Header extends React.PureComponent {
  state = {
    backgroundPositionX: "0",
    backgroundPositionY: "0"
  };

  render = () => (
    <React.Fragment>
      <Subscribe to={[WindowSizeContainer]}>
        {this.handleWindowResize}
      </Subscribe>
      <Jumbotron fluid style={this.state}>
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
    </React.Fragment>
  );

  handleWindowResize = container => {
    const { width } = container.state;
    const { offsetX, offsetY } = calculateBackgroundOffset(width);
    const backgroundPositionX = `${offsetX}px`;
    const backgroundPositionY = `${offsetY}px`;

    this.setState({ backgroundPositionX, backgroundPositionY });
    return null;
  };
}

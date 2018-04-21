import React from "react";

import facepaint from "facepaint";
import { Jumbotron, Container } from "reactstrap";
import { css } from "emotion";

import WindowSizeContext from "../contexts/WindowSizeContext";
import { calculateBackgroundOffset } from "./utils";

const breakpoints = [576, 768, 992, 1200];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
const styles = css(mq({ fontSize: ["14vw", "10vw", "7vw", "6vw", "5vw"] }));

// TODO: Find out when this component re-renders
export default class Header extends React.Component {
  render = () => (
    <WindowSizeContext.Consumer>{this.renderHeader}</WindowSizeContext.Consumer>
  );

  renderHeader = ({ width }) => {
    const { offsetX, offsetY } = calculateBackgroundOffset(width);
    const backgroundPositionX = `${offsetX}px`;
    const backgroundPositionY = `${offsetY}px`;

    return (
      <Jumbotron fluid style={{ backgroundPositionX, backgroundPositionY }}>
        <Container fluid>
          <h1 className={`${styles} text-white`}>
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

//@flow strict
import React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import RSVPLink from "../shared/RSVPLink";
import WindowSizeContext from "../../contexts/WindowSizeContext";
import { calculateBackgroundOffset } from "./utils";
import { convertListToEm } from "../../styles/utils";

import backgroundImage from "../../static/images/header-background.png";

export default class Header extends React.Component<{}> {
  render = () => (
    <WindowSizeContext.Consumer>{this.renderHeader}</WindowSizeContext.Consumer>
  );

  renderHeader = ({ width }: { width: number }) => {
    const { offsetX, offsetY } = calculateBackgroundOffset(width);
    const backgroundPositionX = `${offsetX}px`;
    const backgroundPositionY = `${offsetY}px`;

    return (
      <Jumbotron
        aria-label="Event header"
        style={{ backgroundPositionX, backgroundPositionY }}
      >
        <Title>Sam & Sue’s 50th Anniversary</Title>
        <Subtitle>Saturday, June 23, 2018</Subtitle>
        <Subtitle>Somers, Montana</Subtitle>
        <RSVPLink />
      </Jumbotron>
    );
  };
}

const breakpoints1 = convertListToEm([576, 768, 992, 1200]);
const mq1 = facepaint(breakpoints1.map(bp => `@media (min-width: ${bp}em)`));
const Title = styled.h1(
  css`
    font-family: "Playfair Display";
    font-weight: normal;
    color: hsl(243, 68%, 95%);
    margin: 0 0 0.5em;
  `,
  mq1({
    fontSize: ["13vw", "9vw", "6vw", "5vw", "4vw"],
  })
);

const Subtitle = styled.p(
  css`
    color: hsl(243, 68%, 85%);
    margin: 0.75em 0;
  `,
  mq1({ fontSize: ["1.1rem", "1.25rem"] })
);

const breakpoints2 = convertListToEm([1200]);
const mq2 = facepaint(breakpoints2.map(bp => `@media (min-width: ${bp}em)`));
const Jumbotron = styled.header(
  css`
    background-image: ${`url(${backgroundImage})`};
    background-color: hsl(243, 68%, 16%);
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 18px 18px;
  `,
  mq2({
    paddingBottom: ["30px", "60px"],
  })
);

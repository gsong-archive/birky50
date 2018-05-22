//@flow strict
import React from "react";

import facepaint from "facepaint";
import styled, { css } from "react-emotion";

import RSVPLink from "./shared/RSVPLink";
import WindowSizeContext from "../contexts/WindowSizeContext";
import { calculateBackgroundOffset } from "./utils";
import { colors } from "../styles/variables";

import backgroundImage from "../static/images/header-background.png";

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

const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: white;
`;

let breakpoints = [576, 768, 992, 1200];
let mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
const Title = styled.h1(
  css`
    color: white;
    margin-bottom: 1rem;
  `,
  mq({
    fontSize: ["14vw", "10vw", "7vw", "6vw", "5vw"],
  })
);

breakpoints = [1200];
mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
const Jumbotron = styled.header(
  css`
    background-color: ${colors.primary};
    background-image: ${`url(${backgroundImage})`};
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 1rem 1rem;
  `,
  mq({
    paddingBottom: ["2rem", "4rem"],
  })
);

import React from "react";

import { Jumbotron, Container } from "reactstrap";

import { Consumer } from "../providers/WindowSizeProvider";

export default () => (
  <Consumer>
    {context => (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-white">Sam & Sue’s 50th Anniversary</h1>
          <p className="lead text-white">Saturday, June 23, 2018</p>
          <p className="lead text-white">Somers, Montana</p>
          <p className="lead text-white">Width: {context.state.width}</p>
          <p className="lead text-white">Height: {context.state.height}</p>
        </Container>
      </Jumbotron>
    )}
  </Consumer>
);

import React from "react";

import { Jumbotron, Container } from "reactstrap";

import background from "../images/header-background.png";

export default () => (
  <Jumbotron
    fluid
    style={{
      backgroundColor: "#100d44",
      backgroundImage: `url(${background})`,
      backgroundSize: "100%",
      height: "400px"
    }}
  >
    <Container fluid>
      <h1 className="display-3 text-white">Sam & Sue’s 50th Anniversary</h1>
      <p className="lead text-white">Saturday, June 23, 2018</p>
      <p className="lead text-white">Somers, Montana</p>
    </Container>
  </Jumbotron>
);

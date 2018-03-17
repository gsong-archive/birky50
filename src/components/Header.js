import React from "react";

import { Jumbotron, Container } from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render = () => (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3 text-white">Sam & Sue’s 50th Anniversary</h1>
        <p className="lead text-white">Saturday, June 23, 2018</p>
        <p className="lead text-white">Somers, Montana</p>
      </Container>
    </Jumbotron>
  );
}

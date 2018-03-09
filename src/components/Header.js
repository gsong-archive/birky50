import React from "react";

import { Jumbotron, Container } from "reactstrap";

import background from "../images/header-background.png";

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

  render = () => {
    return (
      <Jumbotron
        fluid
        style={{
          backgroundColor: "#100d44",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "150px -70%"
        }}
      >
        <Container fluid>
          <h1 className="display-3 text-white">Sam & Sue’s 50th Anniversary</h1>
          <p className="lead text-white">Saturday, June 23, 2018</p>
          <p className="lead text-white">Somers, Montana</p>
        </Container>
      </Jumbotron>
    );
  };
}

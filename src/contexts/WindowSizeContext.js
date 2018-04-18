import React from "react";

const WindowSizeContext = React.createContext();

export class WindowSizeProvider extends React.Component {
  state = { width: window.innerWidth };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  render = () => (
    <WindowSizeContext.Provider value={this.state}>
      {this.props.children}
    </WindowSizeContext.Provider>
  );

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
}

export default WindowSizeContext;

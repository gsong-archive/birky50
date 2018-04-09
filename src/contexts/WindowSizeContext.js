import React from "react";

const WindowSizeContext = React.createContext();

export class WindowSizeProvider extends React.Component {
  state = { width: window.innerWidth, height: window.innerHeight };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  render = () => {
    return (
      <WindowSizeContext.Provider value={this.state}>
        {this.props.children}
      </WindowSizeContext.Provider>
    );
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
}

export default WindowSizeContext;

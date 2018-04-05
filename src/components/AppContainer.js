import React from "react";

export default class AppContainer extends React.PureComponent {
  componentDidMount = () => {
    const { updateWindowDimensions } = this.props;
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.props.updateWindowDimensions);
  };

  render = () => <React.Fragment>{this.props.children}</React.Fragment>;
}

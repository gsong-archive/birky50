//@flow strict
import * as React from "react";

const WindowSizeContext = React.createContext({ width: 800 });

type Props = { children: React.Node };
type State = { width: number };

export class WindowSizeProvider extends React.Component<Props, State> {
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

import { Container } from "unstated";

export default class WindowSizeContainer extends Container {
  state = { width: window.innerWidth, height: window.innerHeight };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
}

//@flow strict
import * as React from "react";

const SectionContext = React.createContext("uniqueId");

type Props = { id: string, children: React.Node };

export class SectionProvider extends React.Component<Props> {
  render = () => (
    <SectionContext.Provider value={this.props.id}>
      {this.props.children}
    </SectionContext.Provider>
  );
}

export default SectionContext;

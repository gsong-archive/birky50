import React from "react";

const SectionContext = React.createContext("uniqueId");

export class SectionProvider extends React.Component {
  render = () => (
    <SectionContext.Provider value={this.props.id}>
      {this.props.children}
    </SectionContext.Provider>
  );
}

export default SectionContext;

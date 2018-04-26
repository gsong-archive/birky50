import React from "react";

import SectionContext from "../../contexts/SectionContext";

export default ({ children }) => (
  <SectionContext.Consumer>
    {id => (
      <h1 id={`${id}-description`} className="mb-3">
        {children}
      </h1>
    )}
  </SectionContext.Consumer>
);

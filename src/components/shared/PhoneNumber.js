import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";

export default ({ number }) => (
  <div>
    <FontAwesomeIcon icon={faPhone} />
    <a href={`tel:${number}`}>{number}</a>
  </div>
);

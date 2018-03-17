import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faMapMarker from "@fortawesome/fontawesome-free-solid/faMapMarker";

export default ({ address, url }) => (
  <div>
    <FontAwesomeIcon icon={faMapMarker} />
    <a href={url}>{address}</a>
  </div>
);

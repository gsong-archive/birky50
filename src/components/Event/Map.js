//@flow strict
import React from "react";

import { css } from "emotion";

import WindowSizeContext from "../../contexts/WindowSizeContext";
import { boxShadow1 } from "../../styles";

export default class Map extends React.Component<{}> {
  defaultWidth = 400;
  mapContainer = React.createRef();

  render = () => (
    <div ref={this.mapContainer}>
      <WindowSizeContext.Consumer>{this.renderMap}</WindowSizeContext.Consumer>
    </div>
  );

  renderMap = () => {
    const width = this.mapContainer.current
      ? this.mapContainer.current.clientWidth
      : this.defaultWidth;
    const height = getHeightFromWidth(width);

    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.5868734347823!2d-114.24015338435312!3d48.07961667921895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5366535871876905%3A0x3088f2289bea6c!2sVista+Linda+Mexican+%26+Catering!5e0!3m2!1sen!2sus!4v1520397563655"
        title="map"
        height={height}
        allowFullScreen
        className={css`
          ${boxShadow1};
          width: 100%;
          border: 0;
        `}
      />
    );
  };
}

const getHeightFromWidth = width => {
  const max = 500;
  const min = 300;
  let height = Math.min(Math.floor((width / 4) * 3), max);
  height = Math.max(height, min);
  return height;
};

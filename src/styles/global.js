import WebFont from "webfontloader";
import { injectGlobal } from "emotion";

WebFont.load({
  google: {
    families: ["Lato"],
  },
});

const size = "100%";

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${size};
  }

  body {
    font-family: Lato, sans-serif;
    margin: 0;
    border: 0.25rem solid purple;
  }

  // IE 11
  main { display: block }
`;

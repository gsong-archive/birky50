import WebFont from "webfontloader";
import { injectGlobal } from "emotion";

WebFont.load({
  google: {
    families: ["Lato", "Work Sans"]
  }
});

injectGlobal`
 * {
    box-sizing: border-box;
  }

  body {
    font-family: Lato, sans-serif;
    margin: 0;
  }

  h1, h2 {
    font-family: Work Sans,sans-serif;
    font-weight: 500;
    margin: 0 0 .5rem;
  }
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }

  address { font-style: normal }
`;

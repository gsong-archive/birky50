import React from "react";

import { render } from "react-testing-library";

import { mockSupportsGrid } from "testUtils/mocks";

import { WomanRaisingHand } from "../shared/EmojiLabels";

mockSupportsGrid(false);

const ContactUs = require("../ContactUs").default;

test("ContactUs renders properly", () => {
  const { container } = render(
    <ContactUs LabelComponent={WomanRaisingHand} sectionLabel="Questions?" />
  );

  expect(container).toMatchSnapshot();
});

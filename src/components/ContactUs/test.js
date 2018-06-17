//@flow
import React from "react";

import { render } from "react-testing-library";

import { mockSupportsGrid } from "testUtils/mocks";

import { WomanRaisingHand } from "../shared/EmojiLabels";

mockSupportsGrid(true);

const ContactUs = require("./index").default;

test("ContactUs form elements are properly labeled", () => {
  const NAME = "name";
  const EMAIL = "email";
  const MESSAGE = "message";
  const { getByLabelText } = render(
    <ContactUs LabelComponent={WomanRaisingHand} sectionLabel="Questions?" />
  );
  const nameInput = getByLabelText(RegExp(NAME, "i"));
  const emailInput = getByLabelText(RegExp(EMAIL, "i"));
  const messageInput = getByLabelText(RegExp(MESSAGE, "i"));

  // $FlowFixMe
  expect(nameInput.name).toBe(NAME);
  // $FlowFixMe
  expect(emailInput.name).toBe(EMAIL);
  // $FlowFixMe
  expect(messageInput.name).toBe(MESSAGE);
});

test("ContactUs renders properly", () => {
  const { container } = render(
    <ContactUs LabelComponent={WomanRaisingHand} sectionLabel="Questions?" />
  );

  expect(container).toMatchSnapshot();
});

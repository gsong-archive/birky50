import React from "react";

import { render } from "react-testing-library";

import ContactUs from "../ContactUs";
import { WomanRaisingHand } from "../shared/EmojiLabels";

test("ContactUs form elements are properly labeled", () => {
  const NAME = "name";
  const EMAIL = "email";
  const MESSAGE = "message";
  const { getByLabelText } = render(
    <ContactUs LabelComponent={WomanRaisingHand} sectionLabel="Questions?" />
  );
  const nameInput = getByLabelText(NAME);
  const emailInput = getByLabelText(EMAIL);
  const messageInput = getByLabelText(MESSAGE);

  expect(nameInput.name).toBe(NAME);
  expect(emailInput.name).toBe(EMAIL);
  expect(messageInput.name).toBe(MESSAGE);
});

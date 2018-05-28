import React from "react";

import { render } from "react-testing-library";

import { mockSupportsGrid } from "testUtils/mocks";

import ContactUs from "../ContactUs";
import { WomanRaisingHand } from "../shared/EmojiLabels";

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

  expect(nameInput.name).toBe(NAME);
  expect(emailInput.name).toBe(EMAIL);
  expect(messageInput.name).toBe(MESSAGE);
});

test("ContactUs renders properly", () => {
  mockSupportsGrid(true);
  const { container } = render(
    <ContactUs LabelComponent={WomanRaisingHand} sectionLabel="Questions?" />
  );

  expect(container).toMatchSnapshot();
});

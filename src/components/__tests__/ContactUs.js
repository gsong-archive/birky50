import React from "react";

import { render } from "react-testing-library";

import ContactUs from "../ContactUs";

test("ContactUs form elements are properly labeled", () => {
  const NAME = "name";
  const EMAIL = "email";
  const MESSAGE = "message";
  const { getByLabelText } = render(<ContactUs />);
  const nameInput = getByLabelText(NAME);
  const emailInput = getByLabelText(EMAIL);
  const messageInput = getByLabelText(MESSAGE);

  expect(nameInput.getAttribute("name")).toBe(NAME);
  expect(emailInput.getAttribute("name")).toBe(EMAIL);
  expect(messageInput.getAttribute("name")).toBe(MESSAGE);
});

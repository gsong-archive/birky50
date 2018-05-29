import React from "react";

import * as emotion from "emotion";
import snapshotDiff from "snapshot-diff";
import { getStyles } from "jest-emotion";
import { render } from "react-testing-library";

import { generate } from "testUtils";
import { mockSupportsObjectFit } from "testUtils/mocks";

mockSupportsObjectFit(false);

const Card = require("./index").default;

describe("User sees a card", () => {
  const props = generate.card();
  const { container } = render(<Card {...props} />);

  test("text elements are present", () => {
    ["name", "price", "address", "phone"].forEach(prop =>
      expect(container.textContent).toMatch(props[prop])
    );
  });

  test("image is present", () => {
    const regex = RegExp(`background-image:url\\(${props.imgUrl}\\)`);
    expect(regex.test(getStyles(emotion))).not.toBe(null);
  });
});

test("Card is rendered", () => {
  const { container } = render(<Card {...snapshotProps} />);

  expect(container.firstChild).toMatchSnapshot();
});

test("Card w/o price is rendered", () => {
  const props = { ...snapshotProps };
  delete props.price;
  const { container: complete } = render(<Card {...snapshotProps} />);
  const { container: partial } = render(<Card {...props} />);
  const diff = snapshotDiff(complete.firstChild, partial.firstChild);

  expect(diff).toMatchSnapshot();
});

test("Card w/o phone is rendered", () => {
  const props = { ...snapshotProps };
  delete props.phone;
  const { container: complete } = render(<Card {...snapshotProps} />);
  const { container: partial } = render(<Card {...props} />);
  const diff = snapshotDiff(complete.firstChild, partial.firstChild);

  expect(diff).toMatchSnapshot();
});

test("Card w/o price and phone is rendered", () => {
  const props = { ...snapshotProps };
  delete props.phone;
  delete props.price;
  const { container: complete } = render(<Card {...snapshotProps} />);
  const { container: partial } = render(<Card {...props} />);
  const diff = snapshotDiff(complete.firstChild, partial.firstChild);

  expect(diff).toMatchSnapshot();
});

const snapshotProps = {
  name: "Little Big Burger",
  url: "https://example.com",
  price: "100.00",
  address: "123 Main Street",
  addressUrl: "https://url_to_map",
  phone: "503-543-2345",
  imgUrl: "https://url_to_img",
};

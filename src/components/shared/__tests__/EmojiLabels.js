import React from "react";

import { render } from "react-testing-library";

import { generate } from "testUtils";

import {
  Airplane,
  Airport,
  Burger,
  Calendar,
  Hotel,
  Location,
  PartyHat,
  Phone,
  WomanBiking,
  WomanRaisingHand,
  EmojiLabel
} from "../EmojiLabels";

test("Emojis are rendered properly", () => {
  const emojis = [
    [Airplane, "✈️"],
    [Airport, "🛬"],
    [Burger, "🍔"],
    [Calendar, "📆"],
    [Hotel, "🏩"],
    [Location, "📍"],
    [PartyHat, "🎉"],
    [Phone, "📞"],
    [WomanBiking, "🚴🏽‍♀️"],
    [WomanRaisingHand, "🙋🏻‍♀️"]
  ];

  emojis.forEach(([Component, emoji]) => {
    const props = { label: generate.words() };
    const { container, getByText } = render(<Component {...props} />);
    const emojiNode = getByText(emoji);

    expect(emojiNode.textContent).toBe(emoji);
    expect(container.textContent).toMatch(props.label);
    expect(emojiNode.getAttribute("aria-label")).not.toBeNull();
  });
});

test("EmojiLabel is rendered", () => {
  const props = { emoji: "🦄", ariaLabel: "unicorn", label: "Very Important" };
  const { container } = render(<EmojiLabel {...props} />);

  expect(container).toMatchSnapshot();
});

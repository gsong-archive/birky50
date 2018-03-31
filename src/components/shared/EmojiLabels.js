import React from "react";

const EmojiLabel = ({ emoji, ariaLabel, label }) => (
  <React.Fragment>
    <span role="img" aria-label={ariaLabel}>
      {emoji}
    </span>{" "}
    {label}
  </React.Fragment>
);

export const Airport = ({ label }) => (
  <EmojiLabel emoji="✈️" aria-label="airplane" label={label} />
);

export const Burger = ({ label }) => (
  <EmojiLabel emoji="🍔" aria-label="burger" label={label} />
);

export const Hotel = ({ label }) => (
  <EmojiLabel emoji="🏩" aria-label="hotel" label={label} />
);

export const PartyHat = ({ label }) => (
  <EmojiLabel emoji="🎉" aria-label="party hat" label={label} />
);

export const WomanBiking = ({ label }) => (
  <EmojiLabel emoji="🚴🏽‍♀️" aria-label="biking woman" label={label} />
);

export const WomanRaisingHand = ({ label }) => (
  <EmojiLabel emoji="🙋🏻‍♀️" aria-label="woman raising hand" label={label} />
);

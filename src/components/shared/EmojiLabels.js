import React from "react";

const EmojiLabel = ({ emoji, ariaLabel, label }) => (
  <React.Fragment>
    <span role="img" aria-label={ariaLabel}>
      {emoji}
    </span>{" "}
    {label}
  </React.Fragment>
);

export const Airplane = ({ label }) => (
  <EmojiLabel emoji="✈️" aria-label="airplane" label={label} />
);

export const Airport = ({ label }) => (
  <EmojiLabel emoji="🛬" aria-label="flight arrival" label={label} />
);

export const Burger = ({ label }) => (
  <EmojiLabel emoji="🍔" aria-label="burger" label={label} />
);

export const Calendar = ({ label }) => (
  <EmojiLabel emoji="📆" aria-label="calendar" label={label} />
);

export const Hotel = ({ label }) => (
  <EmojiLabel emoji="🏩" aria-label="hotel" label={label} />
);

export const Location = ({ label }) => (
  <EmojiLabel emoji="📍" aria-label="round pushpin" label={label} />
);

export const PartyHat = ({ label }) => (
  <EmojiLabel emoji="🎉" aria-label="party hat" label={label} />
);

export const Phone = ({ label }) => (
  <EmojiLabel emoji="📞" aria-label="phone receiver" label={label} />
);

export const WomanBiking = ({ label }) => (
  <EmojiLabel emoji="🚴🏽‍♀️" aria-label="biking woman" label={label} />
);

export const WomanRaisingHand = ({ label }) => (
  <EmojiLabel emoji="🙋🏻‍♀️" aria-label="woman raising hand" label={label} />
);

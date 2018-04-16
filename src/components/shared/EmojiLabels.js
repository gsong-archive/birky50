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
  <EmojiLabel emoji="✈️" ariaLabel="airplane" label={label} />
);

export const Airport = ({ label }) => (
  <EmojiLabel emoji="🛬" ariaLabel="flight arrival" label={label} />
);

export const Burger = ({ label }) => (
  <EmojiLabel emoji="🍔" ariaLabel="burger" label={label} />
);

export const Calendar = ({ label }) => (
  <EmojiLabel emoji="📆" ariaLabel="calendar" label={label} />
);

export const Hotel = ({ label }) => (
  <EmojiLabel emoji="🏩" ariaLabel="hotel" label={label} />
);

export const Location = ({ label }) => (
  <EmojiLabel emoji="📍" ariaLabel="round pushpin" label={label} />
);

export const PartyHat = ({ label }) => (
  <EmojiLabel emoji="🎉" ariaLabel="party hat" label={label} />
);

export const Phone = ({ label }) => (
  <EmojiLabel emoji="📞" ariaLabel="phone receiver" label={label} />
);

export const WomanBiking = ({ label }) => (
  <EmojiLabel emoji="🚴🏽‍♀️" ariaLabel="biking woman" label={label} />
);

export const WomanRaisingHand = ({ label }) => (
  <EmojiLabel emoji="🙋🏻‍♀️" ariaLabel="woman raising hand" label={label} />
);

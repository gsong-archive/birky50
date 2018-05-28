export const getBaseFontSize = () =>
  Number(
    window
      .getComputedStyle(document.body)
      .getPropertyValue("font-size")
      .match(/\d+/)[0]
  );

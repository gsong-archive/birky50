//@flow strict
export const getBaseFontSize = () =>
  Number(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("font-size")
      .match(/\d+/)[0]
  );

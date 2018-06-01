//@flow strict
export const getBaseFontSize = () =>
  parseFloat(window.getComputedStyle(document.documentElement).fontSize);

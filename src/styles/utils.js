//@flow strict
export const getBaseFontSize = () =>
  parseFloat(window.getComputedStyle(document.documentElement).fontSize);

export const convertListToEm = (
  listOfPx: Array<number>,
  basis: number = 16
): Array<number> => listOfPx.map(px => px / basis);

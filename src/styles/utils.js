//@flow strict
export const getBaseFontSize = () =>
  parseFloat(window.getComputedStyle(document.documentElement).fontSize);

export const convertListToEm = (
  listOfPx: Array<number>,
  basis: number = 16
): Array<number> => listOfPx.map(px => px / basis);

export const calcSpacing = (
  totalRows: number,
  fontSize: number = 1,
  lineHeight: number = 1.5,
  rhythmFactor: number = 1.5
) => {
  const contentHeight = fontSize * lineHeight;
  const totalHeight = totalRows * rhythmFactor;
  return totalHeight - contentHeight;
};

import { calcSpacing, convertListToEm } from "./utils";

const listOfPx = [15, 200, 400, 1200];

test("Convert list of `px` to `em`", () => {
  const base = 24;
  const expected = listOfPx.map(px => px / base);

  expect(convertListToEm(listOfPx, base)).toEqual(expected);
});

test("Convert list of `px` to `em` using default base", () => {
  const base = 16;
  const listOfPx = [15, 200, 400, 1200];
  const expected = listOfPx.map(px => px / base);

  expect(convertListToEm(listOfPx)).toEqual(expected);
});

test("Calculate 2 vertical spacing using defaults", () => {
  const expected = 2 * 1.5 - 1.5;

  expect(calcSpacing(2)).toEqual(expected);
});

test("Calculate 2 vertical spacing using 1.2rem fontSize", () => {
  const expected = 2 * 1.5 - 1.2 * 1.5;

  expect(calcSpacing(2, 1.2)).toEqual(expected);
});

test("Calculate 2 vertical spacing using 1.2 lineHeight", () => {
  const expected = 2 * 1.5 - 1.2;

  expect(calcSpacing(2, 1, 1.2)).toEqual(expected);
});

test("Calculate 2 vertical spacing using 1.2 rhythmFactor", () => {
  const expected = 2 * 1.2 - 1.5;

  expect(calcSpacing(2, 1, 1.5, 1.2)).toEqual(expected);
});

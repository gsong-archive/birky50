import { convertListToEm } from "./index";

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

//@flow strict
import { css } from "emotion";

import { fontFamily } from "./variables";
import { calcSpacing } from "./utils";

export const bold = css`
  font-weight: bold;
`;

export const borderRadius = css`
  border-radius: 0.25rem;
`;

export const boxShadow1 = css`
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

export const boxShadow2 = css`
  box-shadow: 0 3px 8px 0 hsla(0, 0%, 0%, 0.15);
`;

export const formInput = css`
  ${borderRadius};
  font: 1rem "${fontFamily}", sans-serif;
  line-height: 1.5;
  padding: ${calcSpacing(1.5) / 2}rem 0.75rem;
  border: 1px solid hsla(0, 0%, 0%, 0.16);
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
  -webkit-appearance: none;
`;

export const btn = css`
  ${borderRadius};
  ${boxShadow2};
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  padding: 0.625rem 1.125rem;
  border: 0;
`;

export const btnLg = css`
  ${btn};
  font-size: 1.25rem;
  padding: 0.5rem 1.125rem;
`;

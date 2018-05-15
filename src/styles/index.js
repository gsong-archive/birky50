import { css } from "emotion";

import { colors } from "./variables";

export const borderRadius = css`
  border-radius: 0.25rem;
`;

export const formInput = css`
  ${borderRadius};
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid ${colors.gray};
`;

export const btn = css`
  ${borderRadius};
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
`;

export const btnLg = css`
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  border-radius: 0.3rem;
`;

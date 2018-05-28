const _supports = feature =>
  typeof document.documentElement.style[feature] === "string";

export const supportsGrid = _supports("grid");

export const supportsObjectFit = _supports("objectFit");

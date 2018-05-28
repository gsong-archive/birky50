import * as cssFeatures from "../styles/cssFeatures";
import * as styleUtils from "../styles/utils";

export const mockGetBaseFontSize = {
  mock: () => (styleUtils.getBaseFontSize = jest.fn(() => 16)),
  restore: () => styleUtils.getBaseFontSize.mockRestore(),
};

export const mockSupportsGrid = bool => (cssFeatures.supportsGrid = bool);

export const mockSupportsObjectFit = bool =>
  (cssFeatures.supportsObjectFit = bool);

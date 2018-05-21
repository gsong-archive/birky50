import { generate } from "testUtils";

import PhoneNumber from "../PhoneNumber";

export default {
  component: PhoneNumber,
  props: { number: generate.phoneNumber() },
};

//@flow
import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import PhoneNumber from "../PhoneNumber";

export default createFixture({
  component: PhoneNumber,
  props: { number: generate.phoneNumber() },
});

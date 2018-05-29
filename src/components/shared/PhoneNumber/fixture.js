//@flow
import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import PhoneNumber from "./index";

export default createFixture({
  component: PhoneNumber,
  name: "PhoneNumber",
  props: { number: generate.phoneNumber() },
});

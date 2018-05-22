//@flow
import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import Address from "../Address";

export default createFixture({
  component: Address,
  props: { address: generate.address(), url: generate.url() },
});

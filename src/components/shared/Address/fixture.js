//@flow
import { createFixture } from "react-cosmos-flow/fixture";

import { generate } from "testUtils";

import Address from "./index";

export default createFixture({
  component: Address,
  name: "Address",
  props: { address: generate.address(), url: generate.url() },
});

import { generate } from "testUtils";

import Address from "../Address";

export default {
  component: Address,
  props: { address: generate.address(), url: generate.url() },
};

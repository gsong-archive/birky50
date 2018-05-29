//@flow
import { createFixture } from "react-cosmos-flow/fixture";

import ContactUs from "./index";
import { WomanRaisingHand } from "../shared/EmojiLabels";

export default createFixture({
  component: ContactUs,
  name: "Default",
  description: "`LabelComponent` prop is a React component.",
  props: { LabelComponent: WomanRaisingHand, sectionLabel: "Questions?" },
});

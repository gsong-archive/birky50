//@flow
import { createFixture } from "react-cosmos-flow/fixture";

import ActivityList from "./ActivityList.cosmos";
import { WomanBiking } from "../shared/EmojiLabels";

export default createFixture({
  component: ActivityList,
  props: { LabelComponent: WomanBiking, sectionLabel: "What to Do?" },
});

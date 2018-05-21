import ActivityList from "./ActivityList.cosmos";
import { WomanBiking } from "../shared/EmojiLabels";

export default {
  component: ActivityList,
  props: { LabelComponent: WomanBiking, sectionLabel: "What to Do?" },
};

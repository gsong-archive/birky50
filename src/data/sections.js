import ContactUs from "../components/ContactUs";
import Event from "../components/Event";
import FoodList from "../components/FoodList";
import {
  Burger,
  PartyHat,
  WomanRaisingHand,
} from "../components/shared/EmojiLabels";

export default [
  {
    id: "event",
    navLabel: "Details",
    sectionLabel: "Celebration Details",
    sectionTag: "main",
    SectionComponent: Event,
    LabelComponent: PartyHat,
  },
  {
    id: "foodList",
    navLabel: "Food",
    sectionLabel: "Where to Eat?",
    SectionComponent: FoodList,
    LabelComponent: Burger,
  },
  {
    id: "contactUs",
    navLabel: "Questions?",
    sectionLabel: "Questions?",
    SectionComponent: ContactUs,
    LabelComponent: WomanRaisingHand,
  },
];

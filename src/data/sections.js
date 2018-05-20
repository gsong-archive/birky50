import ActivityList from "../components/ActivityList";
import Airport from "../components/Airport";
import ContactUs from "../components/ContactUs";
import Event from "../components/Event";
import FoodList from "../components/FoodList";
import LodgingList from "../components/LodgingList";
import {
  Airplane,
  Burger,
  Hotel,
  PartyHat,
  WomanBiking,
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
    id: "airport",
    navLabel: "Airport",
    sectionLabel: "Where to Fly Into?",
    SectionComponent: Airport,
    LabelComponent: Airplane,
  },
  {
    id: "lodgingList",
    navLabel: "Lodging",
    sectionLabel: "Where to Stay?",
    SectionComponent: LodgingList,
    LabelComponent: Hotel,
  },
  {
    id: "foodList",
    navLabel: "Food",
    sectionLabel: "Where to Eat?",
    SectionComponent: FoodList,
    LabelComponent: Burger,
  },
  {
    id: "activityList",
    navLabel: "Activities",
    sectionLabel: "What to Do?",
    SectionComponent: ActivityList,
    LabelComponent: WomanBiking,
  },
  {
    id: "contactUs",
    navLabel: "Questions?",
    sectionLabel: "Questions?",
    SectionComponent: ContactUs,
    LabelComponent: WomanRaisingHand,
  },
];

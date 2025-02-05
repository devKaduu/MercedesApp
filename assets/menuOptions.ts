import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface MenuItem {
  name: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  href: string;
}

export default [
  {
    name: "Controls",
    iconName: "car",
    href: "/controls",
  },
  {
    name: "Climate",
    iconName: "fan",
    href: "/climate",
  },
  {
    name: "Location",
    iconName: "map-marker",
    href: "/location",
  },
  {
    name: "Summon",
    iconName: "ship-wheel",
    href: "/summon",
  },
  {
    name: "Security",
    iconName: "shield-check",
    href: "/security",
  },
  {
    name: "Updates",
    iconName: "update",
    href: "/updates",
  },
  {
    name: "Pet mode",
    iconName: "dog",
    href: "/pet-mode",
  },
] as MenuItem[];

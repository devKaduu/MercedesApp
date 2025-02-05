import { OptionsRow, TextOptionsRow } from "./styles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { MenuItem } from "@/assets/menuOptions";
import { Link } from "expo-router";

interface MenuListProps {
  items: MenuItem;
}

export default function OptionRow({ items }: MenuListProps) {
  return (
    <Link href={items.href} asChild>
      <OptionsRow>
        <MaterialCommunityIcons name={items.iconName} size={26} color="gray" />
        <TextOptionsRow>{items.name}</TextOptionsRow>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" style={{ marginLeft: "auto" }} />
      </OptionsRow>
    </Link>
  );
}

import { Container, Header, ContentText, Title, SubTitle, ImageCar, MutipleIcons } from "./styles";

import { FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { FlatList } from "react-native";

import image from "@/assets/images";
import menuOptions from "@/assets/menuOptions";
import OptionsRow from "@/components/OptionRow";

export default function HomeScreen() {
  return (
    <Container>
      <Header>
        <ContentText>
          <Title>My GLC Coupé</Title>
          <SubTitle>Parked</SubTitle>
        </ContentText>
        <FontAwesome name="user-circle" size={30} color={"gray"} />
      </Header>
      <ImageCar source={image.car} contentFit="contain" />

      <MutipleIcons>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </MutipleIcons>

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <OptionsRow items={item} />}
      />
    </Container>
  );
}

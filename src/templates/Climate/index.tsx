import { Link } from "expo-router";

import {
  ButtonPressablBack,
  Container,
  ControlsRow,
  Footer,
  IconButtonContainer,
  IconButtonText,
  ImageClimateCar,
  Label,
  TemperatureContainer,
  TemperatureText,
} from "./styles";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import image from "@/assets/images";
import { useState } from "react";

export default function ClimateScreen() {
  const [temperature, setTemperature] = useState<number>(72);
  const [powerOn, setPowerOn] = useState<boolean>(false);

  function decreaseTemperature() {
    if (temperature > 61) {
      setTemperature(temperature - 1);
    }
  }

  function increaseTemperature() {
    if (temperature < 85) {
      setTemperature(temperature + 1);
    }
  }

  return (
    <Container>
      <ImageClimateCar source={image.climate} contentFit="cover" />

      <Link href="/" asChild>
        <ButtonPressablBack>
          <Entypo name="chevron-left" size={24} color="white" />
        </ButtonPressablBack>
      </Link>

      <Footer>
        <Label>Interior {temperature} - Exterior 66°F</Label>

        <ControlsRow>
          <IconButtonContainer onPress={() => setPowerOn(!powerOn)}>
            <MaterialCommunityIcons name="power" size={42} color={powerOn ? "white" : "gray"} />
            <IconButtonText isOn={powerOn}>{powerOn ? "On" : "Off"}</IconButtonText>
          </IconButtonContainer>

          <TemperatureContainer>
            <Entypo onPress={decreaseTemperature} name="chevron-left" size={30} color="gray" />
            <TemperatureText isOn={powerOn}>{temperature}°</TemperatureText>
            <Entypo onPress={increaseTemperature} name="chevron-right" size={30} color="gray" />
          </TemperatureContainer>

          <IconButtonContainer>
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            <IconButtonText>Vent</IconButtonText>
          </IconButtonContainer>
        </ControlsRow>
      </Footer>
    </Container>
  );
}

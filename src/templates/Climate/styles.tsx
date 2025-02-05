import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  flex: 1;
  background-color: #161818;
`;

export const ImageClimateCar = styled(Image)`
  width: 100%;
  height: 65%;
`;

export const ButtonPressablBack = styled.Pressable`
  position: absolute;
  top: 50px;
  left: 25px;
  background-color: #2f3030;
  padding: 10px;
  border-radius: 5px;
`;

export const Footer = styled.View`
  align-items: center;
  padding: 12px;
  margin-bottom: 40px;
  margin-top: auto;
`;

export const Label = styled.Text`
  color: gray;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ControlsRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const IconButtonContainer = styled.Pressable`
  align-items: center;
`;

export const IconButtonText = styled.Text<{ isOn?: boolean }>`
  color: ${(props) => (props.isOn ? "white" : "gray")};
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TemperatureText = styled.Text<{ isOn?: boolean }>`
  font-size: 48px;
  font-weight: 300;
  width: 82px;
  /* border: 1px solid red; */
  color: ${(props) => (props.isOn ? "white" : "gray")};
  text-align: center;
  margin-left: 10px;
  margin-right: 5px;
`;

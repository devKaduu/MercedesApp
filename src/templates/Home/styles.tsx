import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #161818;
`;

export const Header = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentText = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  color: #eee;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  font-weight: 500;
  color: gray;
`;

export const ImageCar = styled(Image)`
  width: 100%;
  height: 300px;
  transform: rotateY(180deg);
`;

export const MutipleIcons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px;
  margin-top: 0px;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
`;
export const MidContainer = styled.View`

  width: 80%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 15px;
  padding: 20px;
`;
export const ActionButton = styled.TouchableOpacity`
  background-color: #014364;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  margin-right: 15px;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

export const TitleTrip = styled.Text`
  font-size: 32px;
  padding-bottom: 5%;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  align-self: center;
`;
export const IconAnimation = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const TextMenu = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const LogoMenu = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: 50px;
  align-self: center;
`;

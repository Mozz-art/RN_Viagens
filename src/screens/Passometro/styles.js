import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
`;
export const MidContainer = styled.View`
  width: 85%;
  height: 80%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
`;
export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;
export const ButtonPassometro = styled.TouchableOpacity`
  width: 80%;
  justify-content: center;
  background-color: #014364;
  padding: 5%;
  border-radius: 12px;
  align-items: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
export const TextsTitle = styled.Text`
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  color: white;
`;
export const Texts = styled.Text`
  width: 80%;
  background-color: white;
  text-align: center;
  border-radius: 15px;
  font-size: 18px;
  margin-bottom: 15px;
  margin-top: 20px;
  color: black;
`;
export const TextsButton = styled.Text`
  font-size: 22px;
  color: white;
`;
export const LogoPassometro = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
`;

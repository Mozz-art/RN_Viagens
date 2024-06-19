import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
export const MidContainer = styled.View`
  background-color: #5c5b5b;
  width: 85%;
  height: 85%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
`;
export const Title = styled.Text`
  font-size: 26px;
  margin-bottom: 20px;
  color: #63e6be;
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
  background-color: #63e6be;
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
  color: #63e6be;
`;
export const TextsButton = styled.Text`
  font-size: 22px;

  color: white;
`;
export const LogoPassometro = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;

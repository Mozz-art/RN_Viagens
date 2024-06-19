import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
export const MidContainer = styled.View`
  background-color: #5c5b5b;
  width: 80%;
 
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 15px;
  padding: 20px;
`;
export const ActionButton = styled.TouchableOpacity`
  background-color: #63e6be;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

export const TitleTrip = styled.Text`
  font-size: 42px;
  padding-bottom: 15%;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #63e6be;
`;
export const IconAnimation = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;
export const TextMenu = styled.Text`
  font-size: 16px;
  color: #fff;
`;

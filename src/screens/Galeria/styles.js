import styled from "styled-components/native";

export const Container = styled.View`
   width: 100%;
   height: 100%;
   background-color: #1a1a1a;
`;

export const Container2 = styled.View`
  width: 100%;
  height: 100%;
  padding: 5px;
`;
export const DeleteButton = styled.TouchableOpacity`
  width: 20%;
  background-color: #014364;
  padding: 10px;
  border-radius: 5px;
  margin-left: 5px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #014364;
  flex-direction: row;
  align-items: center;
  padding: 0 25px;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: white;
`;

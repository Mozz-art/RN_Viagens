import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  padding: 0% 10%;
  width: 100%;
  height: 100%;
  
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  padding-bottom: 15%;
  font-weight: bold;
  color: #63e6be;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const TitleTrip = styled.Text`
  font-size: 42px;
  padding-bottom: 15%;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #63e6be;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10%;
  border: solid 2px black;
  padding: 3%;
  font-size: 20px;
  border-radius: ${(props) => (props.rounded ? "6px" : "0")};
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  outline: 0;
`;

export const ClearIcon = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 50%;
  background-color: red;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  background-color: #63e6be;
  padding: 5%;
  border-radius: 12px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  background-color: transparent;
  padding: 5%;
`;

export const TextRegister = styled.Text`
  color: #63e6be;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TextButton = styled.Text`
  display: flex;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
`;

export const IconAnimation = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const IconStyle = {
  marginRight: 5,
  marginLeft: 7,
};

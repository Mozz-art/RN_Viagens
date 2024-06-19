import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const TitleDash = styled.Text`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin: 0px 0 30px 0;
  color: #63e6be;
`;

export const AuthButton = styled.TouchableOpacity`
  background-color: #4285f4;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const AuthButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;

export const TaskContainer = styled.View`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskText = styled.Text`
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
`;

export const TaskInput = styled.TextInput`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  outline: none;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #63e6be;
  padding: 8px;
  border-radius: 5px;
  margin-left: 5px;
`;

export const ActionButtonText = styled.Text`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #63e6be;
  font-size: 14px;
`;

export const ButtonSavePhoto = styled.TouchableOpacity`
  width: 45%;
  background-color: #63e6be;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const TextButtonSave = styled.Text`
  width: 100%;
  color: white;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
`;
export const ContainerSaveDelete = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 20px;
`;
export const TaskContainerCamera = styled.View`
  width: 100%;
  height: 10%;
  background-color: #5c5b5b;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;

export const CameraButton = styled.TouchableOpacity`
  width: 30%;
  height: 80%;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: #63e6be;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

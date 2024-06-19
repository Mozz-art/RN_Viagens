import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const CameraContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

export const CameraButtonContainer = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const CarouselContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

export const Container2 = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #000;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: #fff;
  margin-left: 10px;
`;

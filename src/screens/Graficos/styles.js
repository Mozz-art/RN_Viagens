import styled from "styled-components/native";
export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
`;
export const ContainerFix = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1a1a1a;
`;
export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 22px;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
`;

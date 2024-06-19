import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
`;

export const StyledMapView = styled(MapView)`
  align-self: stretch;
  height: 83%;
`;

export const ButtonNav = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: #014364;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

export const LatLongContainer = styled.View`
  flex-direction: row; 
  margin: 20px 0;
`;

export const LatLong = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-right: 10px; 
`;

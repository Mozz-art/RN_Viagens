import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Key } from '../../database/Key';
import * as S from './styles';

const Tracking = ({ navigation }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: -21.783949626437735,
    longitude: -43.356226989640426,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });
  const [position, setPosition] = useState(null);

  const [destino, setDestino] = useState({
    latitude: -21.783949626437735,
    longitude: -43.356226989640426,
  });

  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
    };
    requestPermissions();
  }, []);

  const startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log('sem permissão para obter a localização');
      return;
    }

    await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    })
      .then((location) => {
        setPosition(location.coords);
        const { longitude, latitude } = location.coords;
        const latitudeDelta = 0.009;
        const longitudeDelta = 0.009;
        setMapRegion({ longitude, latitude, latitudeDelta, longitudeDelta });
      })
      .catch((error) => {
        console.error('Error getting current position:', error);
      });
  };

  return (
    <S.Container>
      <S.StyledMapView region={mapRegion}>
        <Marker coordinate={mapRegion} title="Você está aqui" />
        <MapViewDirections
          origin={position ? position : null}
          destination={destino}
          strokeWidth={3}
          strokeColor={'black'}
          apikey={Key}
        />
      </S.StyledMapView>
      <S.LatLongContainer>
        <S.LatLong>Longitude: {position?.longitude}</S.LatLong>
        <S.LatLong>Latitude: {position?.latitude}</S.LatLong>
      </S.LatLongContainer>
      <S.ButtonNav onPress={startForegroundUpdate}>
        <S.ButtonText>Atualizar Local</S.ButtonText>
      </S.ButtonNav>
    </S.Container>
  );
};

export default Tracking;
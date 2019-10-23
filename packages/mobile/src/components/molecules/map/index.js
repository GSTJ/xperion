import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Alert, PermissionsAndroid} from 'react-native';
import {CurrentLocation, LicitationMarker} from './components';
import MapStyle from './styles';

function Map({markers = [], onMarkerPress, ...props}) {
  // Localização inicial
  const [location, setLocation] = useState({
    latitude: -21.1826618,
    longitude: -47.8401835,
  });

  // Localização em tempo real
  useEffect(() => {
    const GetPos = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const watchId = Geolocation.watchPosition(
          position => setLocation(position.coords),
          () => Alert.alert('Erro', 'Não foi possivel obter a sua localização'),
          {
            enableHighAccuracy: true,
            timeout: 200000,
            maximumAge: 1000,
          },
        );
        return () => Geolocation.clearWatch(watchId);
      } else {
        Alert.alert(
          'Erro',
          'Você precisa aceitar a permissão para ter acesso a localização em tempo real',
        );
      }
    };
    GetPos();
  }, [setLocation]);

  return (
    <MapView
      {...props}
      mapPadding={{left: 0, right: 0, top: 0, bottom: 30}}
      provider={PROVIDER_GOOGLE}
      customMapStyle={MapStyle}
      region={{
        ...location,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}>
      <Marker
        anchor={{x: 0.5, y: 0.5}}
        // onPress={() => navigate('Licitacao', { id })}
        coordinate={location}>
        <CurrentLocation />
      </Marker>

      {markers.map(marker => {
        const {status, address, type, id} = marker;
        const {latitude, longitude} = address;

        return (
          <Marker
            onPress={() => onMarkerPress(id)}
            key={id}
            coordinate={{latitude, longitude}}>
            <LicitationMarker color={status} type={type} />
          </Marker>
        );
      })}
    </MapView>
  );
}

export default Map;

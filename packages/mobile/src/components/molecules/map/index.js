import React, {useState, useEffect} from 'react';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {Alert, PermissionsAndroid} from 'react-native';
import {CurrentLocation, LicitationMarker} from 'components/atoms';
import {MapView} from './styles';

Geocoder.init('AIzaSyA6UspQCGWrvKUPyCtIx49YeH5wyS1keF4');

export default ({markers = [], onMarkerPress, ...props}) => {
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
          async position => {
            setLocation(position.coords);
            const pos = await Geocoder.from(position.coords);

            if (
              !pos.results ||
              !pos.results[0] ||
              !pos.results[0].address_components ||
              !pos.results[0].address_components[3] ||
              !pos.results[0].address_components[3].long_name ||
              pos.results[0].address_components[3].long_name !==
                'Ribeirao Preto'
            ) {
              return Alert.alert(
                'Indisponível para a sua cidade',
                'No momento funcionamos somente em Ribeirão Preto, mas temos planos de expandir para todo o Brasil.',
              );
            }
          },
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
      region={{
        ...location,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}>
      <Marker anchor={{x: 0.5, y: 0.5}} coordinate={location}>
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
};

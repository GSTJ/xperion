import styled from 'styled-components/native';
import mapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyle from './map_style';

export const MapView = styled(mapView)`
  flex: 1;
`;

MapView.defaultProps = {
  mapPadding: {left: 0, right: 0, top: 0, bottom: 30},
  provider: PROVIDER_GOOGLE,
  customMapStyle: MapStyle,
};

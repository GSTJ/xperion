import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Map as map} from 'components/molecules';
import {TEXT, LOWER_CONTRAST} from 'theme';

export const SearchContainer = styled.View`
  height: 55;
  margin-bottom: 10px;
  border: 1px solid ${LOWER_CONTRAST};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
`;

export const Search = styled.TextInput`
  padding-left: 20px;
  padding-right: 20px;
  color: ${TEXT};
  font-family: 'Montserrat Medium';
  font-size: 17px;
  flex: 1;
`;

export const Container = styled(LinearGradient)`
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  padding: 15px 15px 0 15px;
  flex: 1;
`;

export const ScrollContainer = styled.View`
  border-radius: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  flex: 1;
  overflow: hidden;
`;

export const Map = styled(map)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

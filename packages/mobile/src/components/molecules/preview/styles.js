import styled from 'styled-components/native';
import {LicitationMarker} from 'components/atoms';
import {SECONDARY, MIDTONE} from 'theme';

export const Marker = styled(LicitationMarker)`
  width: 25px;
  height: 25px;
  margin-left: 0;
  margin-right: 10px;
  border-radius: 100px;
`;

export const Container = styled.TouchableOpacity`
  background-color: ${props => (props.secondary ? SECONDARY : MIDTONE)};
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 15px;
`;

export const Picture = styled.ImageBackground`
  height: 90px;
  width: 90px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Info = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

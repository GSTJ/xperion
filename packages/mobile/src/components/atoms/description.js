import styled from 'styled-components/native';
import { TEXT } from 'theme';

export default styled.Text`
  font-family: 'Montserrat Medium';
  font-size: ${props => props.size || 14}px;
  color: ${TEXT};
  width: 100%;
  flex: 1;
`;

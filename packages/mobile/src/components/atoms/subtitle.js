import styled from 'styled-components/native';
import { SUBTITLE } from 'theme';

export default styled.Text`
  font-family: 'Montserrat Bold';
  font-size: ${props => props.size || 14}px;
  color: ${SUBTITLE};
  flex: 1;
`;

import styled from 'styled-components/native';
import {TITLE} from 'theme';

const Text = styled.Text`
  font-family: 'Montserrat Bold';
  font-size: ${props => props.size || 14}px;
  color: ${TITLE};
  flex: 1;
`;

Text.defaultProps = {
  numberOfLines: 1,
};

export default Text;

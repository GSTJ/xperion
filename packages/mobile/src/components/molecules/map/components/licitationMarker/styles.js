import styled from 'styled-components/native';
import { RED, GREEN, GRAY } from 'theme';

export const Container = styled.View`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 50;
  background-color: white;
  margin: 5px;
  border: 3px solid
    ${props => {
      switch (props.color) {
        case 'red':
          return RED;
        case 'green':
          return GREEN;
        default:
          return GRAY;
      }
    }};
`;

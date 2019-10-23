import styled, {css} from 'styled-components/native';
import {GREEN, RED, MIDTONE} from 'theme';

export const Header = styled.View`
  background-color: ${MIDTONE};
  align-items: center;
  flex-direction: row;
`;

export const CustomInput = styled.TextInput`
  border: 2px ${MIDTONE};
  border-radius: 5px;
  padding: 15px 20px;
  color: white;
  font-family: 'Montserrat Regular';
  font-size: 15px;
`;

export const Subtitle = styled.Text`
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const Sideview = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Toggle = styled.TouchableOpacity`
  height: 70px;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${props =>
    props.selected &&
    css`
      background-color: ${props.green ? GREEN : RED};
    `};

  border: 2px ${props => (props.green ? GREEN : RED)};
  border-radius: 5px;
`;

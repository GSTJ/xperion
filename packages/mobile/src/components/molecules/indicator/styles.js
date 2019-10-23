import styled from 'styled-components/native';
import {Title as title} from 'components/atoms';
import {SECONDARY, MIDTONE, UNAVAILABLE, ICON, COMPLAINT, TEXT} from 'theme';

export const Container = styled.View`
  background-color: ${MIDTONE};
  border-radius: 10px;
  padding: 25px;
`;

export const Title = styled(title)`
  margin-bottom: 10px;
  color: ${COMPLAINT};
`;

export const Info = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Tag = styled.View`
  background-color: ${props => (props.available ? SECONDARY : UNAVAILABLE)};
  padding: 5px 10px;
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
`;

export const Date = styled.View`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-family: 'Montserrat Medium';
  margin-left: 10px;
  font-size: 13px;
  color: ${props => (props.white ? TEXT : ICON)};
`;

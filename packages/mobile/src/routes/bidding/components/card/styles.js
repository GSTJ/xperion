import styled from 'styled-components/native';
import { Title as title } from 'components/atoms';
import { MIDTONE, ICON } from 'theme';

export const Container = styled.View`
  padding: 30px 10px;
  background: ${MIDTONE};
  border-radius: 10px;
  flex: 1;
`;

export const Title = styled(title)`
  font-family: 'Montserrat Light';
  font-size: 13px;
  text-align: center;
`;

export const Name = styled(title)`
  font-size: 13px;
  text-align: center;
  padding: 0 5px;
`;

export const Picture = styled.ImageBackground`
  overflow: hidden;
  border: 6px ${ICON};
  border-radius: 200px;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-bottom: 10px;
`;

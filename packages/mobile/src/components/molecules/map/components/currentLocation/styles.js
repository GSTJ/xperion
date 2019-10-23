import styled from 'styled-components/native';
import { COMPLAINT, SECONDARY } from 'theme';

export const Center = styled.View`
  width: 23px;
  height: 23px;
  background: ${COMPLAINT};
  border: 5px solid ${SECONDARY};
  border-radius: 20px;
  position: absolute;
`;

export const Area = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {MIDTONE} from 'theme';

export const InfoContainer = styled.View`
  background: ${MIDTONE};
  border-radius: 10px;
  padding: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Gradient = styled(LinearGradient)`
  position: relative;
  height: ${hp('40%')};
`;

export const Picture = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Split = styled.View`
  flex-direction: row;
  align-items: center;
`;

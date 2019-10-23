import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COMPLAINT, TEXT} from 'theme';

export const Container = styled(LinearGradient)`
  height: ${hp('35%')};
  padding: 40px;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 100%;

  border-radius: 10px;
  background-color: ${COMPLAINT};

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: 'Montserrat Bold';

  font-size: 20px;
  color: ${TEXT};
`;

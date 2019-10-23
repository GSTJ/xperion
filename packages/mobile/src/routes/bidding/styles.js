import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { COMPLAINT, TEXT, MIDTONE } from 'theme';

export const Container = styled(LinearGradient)`
  position: relative;
  overflow: hidden;

  border-top-left-radius: 40;
  border-top-right-radius: 40;

  margin-top: -40px;
`;

export const InfoContainer = styled.View`
  background: ${MIDTONE};
  border-radius: 10px;
  padding: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  padding-bottom: 500px;
  margin: 30px;
  flex: 1;
`;

export const FadeTop = styled(LinearGradient)`
  height: 30px;
  width: 100%;

  position: absolute;
  z-index: 10;
`;

export const FadeBottom = styled(LinearGradient)`
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

export const ButtonText = styled.Text`
  font-family: 'Montserrat Bold';

  font-size: 20px;
  color: ${TEXT};
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

export const BackIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
`;

export const Split = styled.View`
  flex-direction: row;
  align-items: center;
`;

import styled, { css } from 'styled-components/native';
import { RadioButton as radio } from 'react-native-paper';
import { GREEN, RED, COMPLAINT, TEXT, MIDTONE } from 'theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export const Header = styled.View`
  background-color: ${MIDTONE};
  align-items: center;
  flex-direction: row;
`;

export const FadeTop = styled(LinearGradient)`
  height: 30px;
  width: 100%;

  position: absolute;
  z-index: 10;
`;

export const Container = styled(LinearGradient)`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const Scroll = styled.ScrollView``;

export const Content = styled.View`
  padding: 30px;
  padding-top: 50px;
  flex: 1;
  height: 100%;
  margin-bottom: 250px;
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

export const BackIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin-right: 20px;
  width: 70px;
  height: 70px;
`;

export const Toggle = styled.TouchableOpacity`
  height: 50px;
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

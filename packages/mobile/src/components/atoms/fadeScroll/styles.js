import styled, {css} from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  position: relative;
  overflow: hidden;

  ${props =>
    props.rounded &&
    css`
      margin-top: -40px;
      border-top-left-radius: 40;
      border-top-right-radius: 40;
    `}
`;

export const Content = styled.View`
  padding-bottom: 450px;
  margin: 30px;
  flex: 1;
`;

export const FadeTop = styled(LinearGradient)`
  height: 30px;
  width: 100%;

  position: absolute;
  z-index: 10;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

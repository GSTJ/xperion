import React from 'react';
import {PRIMARY} from 'theme';
import {Container, Scroll, Content, FadeTop} from './styles';

export default props => (
  <Container {...props} colors={[PRIMARY[0], PRIMARY[1], PRIMARY[1]]}>
    <FadeTop colors={[PRIMARY[0], '#0000']} />

    <Scroll refreshControl={props.refreshControl}>
      <Content>{props.children}</Content>
    </Scroll>
  </Container>
);

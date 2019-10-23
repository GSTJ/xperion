import React from 'react';
import {PRIMARY} from 'theme';
import {Container, Button, Text} from './styles';

export default ({text, ...rest}) => (
  <Container colors={['rgba(0,0,0,0)', PRIMARY[1], PRIMARY[1]]}>
    <Button {...rest}>
      <Text>{text}</Text>
    </Button>
  </Container>
);

import React from 'react';
import {LeftArrow} from 'icons';
import {Container} from './styles';

export default props => (
  <Container {...props}>
    <LeftArrow fill={props.fill} width={20} height={20} />
  </Container>
);

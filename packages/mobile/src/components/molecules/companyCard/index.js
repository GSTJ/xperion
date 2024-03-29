import React from 'react';
import {Container, Title, Picture, Name} from './styles';

export default props => {
  const {name, title, logo} = props;

  return (
    <Container>
      <Picture resizeMode="cover" source={{uri: logo && logo.url}} />
      <Title>{title}</Title>
      <Name numberOfLines={2}>{name}</Name>
    </Container>
  );
};

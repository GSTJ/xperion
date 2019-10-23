import React from 'react';
import { View } from 'react-native';
import { Container, Title, Picture, Name } from './styles';

export default function Enterprise(props) {
  const { name, title, logo } = props;

  return (
    <Container>
      <Picture resizeMode="cover" source={{ uri: logo && logo.url }} />
      <Title>{title}</Title>
      <Name numberOfLines={2}>{name}</Name>
    </Container>
  );
}

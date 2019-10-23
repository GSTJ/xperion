import React from 'react';
import {Description} from 'components/atoms';
import {Container, Title} from './styles';

function Punishment({title, description}) {
  return (
    <Container>
      <Title size={18}>{title}</Title>
      <Description size={16} numberOfLines={7}>
        {description || 'Descrição indisponível'}
      </Description>
    </Container>
  );
}

export default Punishment;

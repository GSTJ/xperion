import React from 'react';
import { Container } from './styles';
import { Building, Plaza, Hospital, Road, Bridge, Unknown } from './resources';

function getIcon(tag) {
  const size = { width: '70%', height: '70%' };
  switch (tag) {
    case 'building':
      return <Building {...size} />;
    case 'plaza':
      return <Plaza {...size} />;
    case 'hospital':
      return <Hospital {...size} />;
    case 'road':
      return <Road {...size} />;
    case 'bridge':
      return <Bridge {...size} />;
    default:
      return <Unknown {...size} />;
  }
}

export default function Marker({ color, type, ...rest }) {
  return (
    <Container {...rest} color={color}>
      {getIcon(type)}
    </Container>
  );
}

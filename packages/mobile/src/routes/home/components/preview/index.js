import React from 'react';
import { Title, Description } from 'components/atoms';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Container, Picture, Info, TitleContainer, Marker } from './styles';

export default function Near(props) {
  const { loading, name, description, status, type, picture, ...rest } = props;

  return (
    <>
      <Container {...rest}>
        <Picture
          as={!picture && ShimmerPlaceHolder}
          autoRun
          resizeMode="cover"
          source={{ uri: picture }}
        />
        <Info>
          <TitleContainer>
            <Marker as={!status && ShimmerPlaceHolder} autoRun color={status} type={type} />
            <Title as={!name && ShimmerPlaceHolder} autoRun numberOfLines={1}>
              {name && name}
            </Title>
          </TitleContainer>

          <Description as={!description && ShimmerPlaceHolder} autoRun numberOfLines={3}>
            {description && description}
          </Description>
        </Info>
      </Container>
    </>
  );
}
//

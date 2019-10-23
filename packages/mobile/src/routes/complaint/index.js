import React, { useState } from 'react';
import { axios } from 'utils';
import { Alert } from 'react-native';
import { Title, Separator } from 'components/atoms';
import { PRIMARY, PLACEHOLDER, ICON, TEXT } from 'theme';
import { LeftArrow } from '../bidding/resources';
import { ThumbsUp, ThumbsDown } from './resources';
import {
  Container,
  Header,
  CustomInput,
  Sideview,
  FadeBottom,
  FadeTop,
  Button,
  Scroll,
  BackIcon,
  ButtonText,
  Content,
  Toggle
} from './styles';

export default function Denuncia(props) {
  const { navigation } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [toggle, setToggle] = useState(null);
  const id = navigation.getParam('id');

  const Enviar = async () => {
    if (!title || !description || toggle === null) {
      return Alert.alert('Erro', 'Preencha todos os campos necessários');
    }

    const response = await axios.post('/complaints', {
      description,
      title,
      satisfaction: toggle,
      bidding: id
    });

    if (!response.data) {
      return Alert.alert('Erro', 'Alguma coisa deu errado! Tente novamente mais tarde');
    }

    Alert.alert('Sucesso', 'Denuncia enviada!\nObrigado por ajudar a comunidade');
    return navigation.navigate('Bidding', { id });
  };

  return (
    <>
      <Header>
        <BackIcon onPress={() => navigation.navigate('Bidding', { id })}>
          <LeftArrow fill={ICON} width={20} height={20} />
        </BackIcon>
        <Title size={24} numberOfLines={1}>
          Denunciar
        </Title>
      </Header>
      <Container colors={[PRIMARY[0], PRIMARY[1], PRIMARY[1]]}>
        <FadeTop colors={[PRIMARY[0], '#0000']} />
        <Scroll>
          <Content>
            <Title size={18} numberOfLines={1}>
              Motivo da Denúncia
            </Title>
            <Separator height={20} />
            <CustomInput
              placeholderTextColor={PLACEHOLDER}
              onChangeText={setTitle}
              value={title}
              style={{ paddingTop: 10, paddingBottom: 10 }}
              placeholder="Ex: Problemas na Infraestrutura"
            />
            <Separator height={20} />

            <Title size={18} numberOfLines={1}>
              Essa obra é satisfatória?
            </Title>
            <Separator height={20} />
            <Sideview>
              <Toggle selected={toggle} onPress={() => setToggle(true)} green>
                <ThumbsUp fill={toggle ? PRIMARY[0] : TEXT} width={30} height={30} />
              </Toggle>
              <Separator width={20} />
              <Toggle selected={toggle === false} onPress={() => setToggle(false)}>
                <ThumbsDown fill={toggle === false ? PRIMARY[0] : TEXT} width={30} height={30} />
              </Toggle>
            </Sideview>

            <Separator height={20} />
            <Title size={18} numberOfLines={1}>
              Mensagem
            </Title>
            <Separator height={20} />
            <CustomInput
              placeholder="Deixe aqui um comentário sobre o motivo da sua denúncia!"
              onChangeText={setDescription}
              value={description}
              style={{ textAlignVertical: 'top', height: 200 }}
              placeholderTextColor={PLACEHOLDER}
              multiline
              numberOfLines={5}
            />
          </Content>
        </Scroll>
      </Container>

      <FadeBottom colors={['rgba(0,0,0,0)', PRIMARY[1], PRIMARY[1]]}>
        <Button onPress={Enviar}>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </FadeBottom>
    </>
  );
}
// <Enterprise name={empresa.nome} address={empresa.endereco} cnpj={empresa.cnpj} />

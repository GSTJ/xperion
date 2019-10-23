import React, {useState} from 'react';
import {axios} from 'utils';
import {Alert, KeyboardAvoidingView} from 'react-native';
import {
  Title,
  Separator,
  BackButton,
  FadeScroll,
  BottomFadeButton,
} from 'components/atoms';
import {MIDTONE, PLACEHOLDER, ICON, TEXT} from 'theme';
import {ThumbsUp, ThumbsDown} from 'icons';
import {Header, Input, MultilineInput, Sideview, Toggle} from './styles';

export default function Denuncia(props) {
  const {navigation} = props;
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
      bidding: id,
    });

    if (!response.data) {
      return Alert.alert(
        'Erro',
        'Alguma coisa deu errado! Tente novamente mais tarde',
      );
    }

    Alert.alert(
      'Sucesso',
      'Denuncia enviada!\nObrigado por ajudar a comunidade',
    );
    return navigation.navigate('Bidding', {id});
  };

  return (
    <>
      <Header>
        <BackButton
          onPress={() => navigation.navigate('Bidding', {id})}
          fill={ICON}
        />
        <Title size={24}>Denunciar</Title>
      </Header>

      <FadeScroll>
        <KeyboardAvoidingView>
          <Title size={18}>Titulo</Title>
          <Separator height={20} />
          <Input
            placeholderTextColor={PLACEHOLDER}
            onChangeText={setTitle}
            value={title}
            placeholder="Ex: Problemas na Infraestrutura"
          />

          <Separator height={20} />
          <Title size={18}>Descrição</Title>
          <Separator height={20} />
          <MultilineInput
            placeholder="Deixe aqui um comentário sobre o motivo da sua denúncia!"
            onChangeText={setDescription}
            value={description}
            placeholderTextColor={PLACEHOLDER}
            multiline
            numberOfLines={5}
          />
          <Separator height={20} />
          <Title size={18}>Essa obra é satisfatória?</Title>
          <Separator height={20} />
          <Sideview>
            <Toggle selected={toggle} onPress={() => setToggle(true)} green>
              <ThumbsUp fill={toggle ? MIDTONE : TEXT} width={30} height={30} />
            </Toggle>
            <Separator width={20} />
            <Toggle
              selected={toggle === false}
              onPress={() => setToggle(false)}>
              <ThumbsDown
                fill={toggle === false ? MIDTONE : TEXT}
                width={30}
                height={30}
              />
            </Toggle>
          </Sideview>
        </KeyboardAvoidingView>
      </FadeScroll>

      <BottomFadeButton onPress={Enviar} text="Enviar" />
    </>
  );
}
// <Enterprise name={empresa.nome} address={empresa.endereco} cnpj={empresa.cnpj} />

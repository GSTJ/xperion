import React, {useState, useCallback, Fragment} from 'react';
import {useAxios} from 'utils';
import moment from 'moment';
import 'moment/locale/pt-br';
import {View, Text, RefreshControl} from 'react-native';
import {formatToBRL} from 'brazilian-values';
import {
  Separator,
  Title,
  Description,
  Subtitle,
  FadeScroll,
  BackButton,
  BottomFadeButton,
} from 'components/atoms';
import {PRIMARY, IMAGE_GRADIENT, ICON} from 'theme';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Clock, Money} from 'icons';
import {Indicator, CompanyCard} from 'components/molecules';
import {Picture, Split, Gradient, InfoContainer} from './styles';

moment.locale('pt-br');

export default function Licitacao(props) {
  const {navigation} = props;
  const id = navigation.getParam('id');

  const [refreshing, setRefreshing] = useState(false);
  const [{data: bidding, loading, error}, refetch] = useAxios(`biddings/${id}`);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  const Start = moment(!loading && Date.parse(bidding.deadlineStart)).format(
    'DD/MM/YYYY',
  );
  const End = moment(!loading && Date.parse(bidding.deadlineEnd)).format(
    'DD/MM/YYYY',
  );

  return (
    <>
      <Gradient colors={[IMAGE_GRADIENT, '#0000']}>
        <Picture
          resizeMode="cover"
          source={{
            uri:
              bidding && bidding.address.picture && bidding.address.picture.url,
          }}
        />
        <BackButton
          onPress={() => navigation.navigate('Home')}
          fill={PRIMARY[0]}
        />
      </Gradient>
      <FadeScroll
        rounded
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Title
          as={loading && ShimmerPlaceHolder}
          style={
            loading && {
              height: 40,
              width: '100%',
            }
          }
          autoRun
          size={25}
          numberOfLines={3}>
          {!loading && bidding.name}
        </Title>
        <Separator height={20} />
        <InfoContainer>
          <Money fill={ICON} style={{marginRight: 10}} width={30} height={30} />
          <Description as={loading && ShimmerPlaceHolder} autoRun size={15}>
            {!loading && formatToBRL(bidding.estimatedBudget)}
          </Description>
        </InfoContainer>
        <Separator height={20} />
        <InfoContainer>
          <Clock fill={ICON} style={{marginRight: 10}} width={30} height={30} />
          <Description as={loading && ShimmerPlaceHolder} autoRun size={15}>
            {!loading && `${Start} - ${End}`}
          </Description>
        </InfoContainer>

        <Separator height={20} />

        {!loading && (
          <Split>
            <CompanyCard title="Construtora" {...bidding.enterprise} />
            <Separator width={20} />
            <CompanyCard title="Órgão Responsável" {...bidding.agency} />
          </Split>
        )}

        <Separator height={20} />
        <Subtitle size={22}>Indicadores</Subtitle>
        <Separator height={20} />

        {!loading &&
          (bidding.punishments[0] ? (
            bidding.punishments.map(punisment => (
              <Fragment key={punisment.id}>
                <Indicator {...punisment} />
                <Separator height={20} />
              </Fragment>
            ))
          ) : (
            <Indicator title="Nenhum" description="Sem indicadores" />
          ))}
      </FadeScroll>
      <BottomFadeButton
        onPress={() => navigation.navigate('Complaint', {id})}
        text="Denunciar"
      />
    </>
  );
}

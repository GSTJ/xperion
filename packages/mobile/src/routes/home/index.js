import React, {useState, useCallback} from 'react';
import {useAxios} from 'utils';
import {Map} from 'components/molecules';
import {
  StatusBar,
  KeyboardAvoidingView,
  View,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {PRIMARY, ICON, LOWER_CONTRAST} from 'theme';
import {Preview} from './components';
import {Search as SearchIcon} from './assets';
import {Container, ScrollContainer, Search, SearchContainer} from './styles';

export default function Mapa(props) {
  const {navigate} = props.navigation;

  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [{data: biddings, loading, error}, refetch] = useAxios('biddings');

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const Filter = useCallback(
    bidding => {
      return bidding.name.toLowerCase().includes(search.toLowerCase());
    },
    [search],
  );

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar currentHeight={0} hidden />
      <Map
        style={{
          flex: 1,
        }}
        markers={biddings || []}
        onMarkerPress={id => navigate('Bidding', {id})}
      />
      <KeyboardAvoidingView
        style={{
          marginTop: -10,
          height: hp('40%'),
        }}>
        <Container colors={PRIMARY}>
          <SearchContainer>
            <Search
              placeholder="Procurar obra pública"
              placeholderTextColor={LOWER_CONTRAST}
              onChangeText={setSearch}
              value={Search}
            />
            <SearchIcon fill={ICON} width={20} height={20} />
          </SearchContainer>

          <ScrollContainer>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View>
                {biddings
                  ? biddings.filter(Filter).map((bidding, i) => {
                      const {address, id} = bidding;
                      const {picture} = address;
                      return (
                        <Preview
                          secondary={i % 2}
                          key={id}
                          {...bidding}
                          onPress={() => navigate('Bidding', {id})}
                          picture={picture && picture.url}
                        />
                      );
                    })
                  : Array.from({length: 5}).map((_, i) => (
                      <Preview key={i} secondary={i % 2} />
                    ))}
              </View>
            </ScrollView>
          </ScrollContainer>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}

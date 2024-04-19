import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {mScale, screenWidth} from '../../styles/mixins';
import Header from '@components/Header';
import Input from '@components/Input';
import MovieCard from '@components/MovieCard';
import type {Movie} from '../../types/models/Movie';
import {useSearchQuery} from '@redux/api';
import {FlashList} from '@shopify/flash-list';

export default function Search() {
  const {styles, theme} = useStyles(stylesheet);
  const [search, setSearch] = useState<string>('');
  const {data, isLoading} = useSearchQuery({queryText: search});

  const _renderItems = ({item, index}: {item: Movie; index: number}) => {
    return <MovieCard item={item} type="" />;
  };

  const _renderListEmpyComponent = () => {
    if (search.length > 0) {
      if (!isLoading && data?.length === 0) {
        return <Text style={styles.empyText}>No results found</Text>;
      }
    } else {
      return <Text style={styles.empyText}>Search for movies or shows</Text>;
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header text="Search" hasBack={true} hasSearch={false} />
      <View style={styles.searchView}>
        <Input
          placeholder="Search"
          value={search}
          handleChange={setSearch}
          handleBlur={() => {}}
          label={''}
        />
      </View>
      <View
        style={[
          {flex: 1, marginTop: mScale(40), paddingHorizontal: mScale(10)},
        ]}>
        {isLoading ? (
          <View style={{marginTop: mScale(200)}}>
            <ActivityIndicator size="large" color={theme.colors.netflixRed} />
          </View>
        ) : (
          <FlashList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItems}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={_renderListEmpyComponent}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {},
  searchView: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empyText: {
    color: theme.colors.text,
    textAlign: 'center',
  },
}));

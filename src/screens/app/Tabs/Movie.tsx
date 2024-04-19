import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '@components/Header';
import {useGetMoviesQuery, useGetTopPopularQuery} from '@redux/api';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import type {Movie} from '../../../types/models/Movie';
import {mScale} from '../../../styles/mixins';
import MovieCard from '@components/MovieCard';
import TopMovieCard from '@components/TopMovieCard';
import {FlashList} from '@shopify/flash-list';

export default function Movie() {
  const {styles, theme} = useStyles(stylesheet);
  const {data, isLoading} = useGetTopPopularQuery(1);
  const [page, setPage] = React.useState(1);
  const getMovieQuery = useGetMoviesQuery(page);
  const [movies, setMovies] = React.useState<Movie[]>([]);

  useEffect(() => {
    if (
      !getMovieQuery.isFetching &&
      !getMovieQuery.isLoading &&
      getMovieQuery.data
    ) {
      setMovies([...movies, ...getMovieQuery.data]);
    }
  }, [getMovieQuery.isFetching, getMovieQuery.isLoading]);

  const _renderTopItems = ({item, index}: {item: Movie; index: number}) => {
    return <TopMovieCard item={item} type="movie" />;
  };

  const _renderItems = ({item, index}: {item: Movie; index: number}) => {
    return <MovieCard item={item} type="movie" />;
  };

  const _renderListFooterComponent = () => {
    if (getMovieQuery.isFetching) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: mScale(20),
          }}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={theme.colors.netflixRed}
          />
        </View>
      );
    } else {
      return <></>;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header text="Movies" hasBack={false} hasSearch={true} />

      <View style={styles.container}>
        <View style={styles.topRatedView}>
          <Text style={styles.topText}>Top Rated</Text>

          {isLoading ? (
            <View style={{marginTop: 20}}>
              <ActivityIndicator size="large" color={theme.colors.netflixRed} />
            </View>
          ) : (
            <FlatList
              data={data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={_renderTopItems}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
        <View style={[styles.topRatedView, {flex: 1}]}>
          <Text style={styles.topText}>Movies</Text>
          {getMovieQuery.isLoading ? (
            <View style={{marginTop: 20}}>
              <ActivityIndicator size="large" color={theme.colors.netflixRed} />
            </View>
          ) : (
            <FlashList
              data={movies}
              keyExtractor={(_, index) => index.toString()}
              renderItem={_renderItems}
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.3}
              onEndReached={() => {
                if (getMovieQuery.isFetching || getMovieQuery.isLoading) {
                  return;
                }
                setPage(page + 1);
              }}
              ListFooterComponent={_renderListFooterComponent}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    marginHorizontal: mScale(20),
    flex: 1,
  },
  topText: {
    marginBottom: mScale(10),
    color: theme.colors.netflixRed,
    fontSize: mScale(15),
    fontWeight: theme.font.medium,
  },
  topRatedView: {
    marginTop: mScale(20),
  },
}));

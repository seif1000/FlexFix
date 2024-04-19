import {View, Text, SafeAreaView, ActivityIndicator, Alert} from 'react-native';
import React, {useCallback, useState} from 'react';
import type {ScreenProps} from '../../types/navigation';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {mScale} from '../../styles/mixins';
import {useGetDetailsQuery, useGetMovieTrailerQuery} from '@redux/api';
import Header from '@components/Header';
import YoutubePlayer from 'react-native-youtube-iframe';
import Starts from '@assets/icons/star.svg';

export default function Details({navigation, route}: ScreenProps) {
  const {styles, theme} = useStyles(stylesheet);
  const [playing, setPlaying] = useState(false);
  const trailerQuery = useGetMovieTrailerQuery({
    type: route?.params?.type,
    id: route?.params?.id,
  });
  const detailsQuery = useGetDetailsQuery({
    stype: route?.params?.type,
    id: route?.params?.id,
  });

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {trailerQuery.isLoading || detailsQuery.isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={theme.colors.netflixRed} />
        </View>
      ) : (
        <View>
          <Header
            text={detailsQuery.data?.title ?? detailsQuery?.data?.name}
            hasBack={true}
            hasSearch={false}
          />
          {trailerQuery.data && (
            <View>
              <YoutubePlayer
                height={250}
                play={playing}
                videoId={trailerQuery.data}
                onChangeState={onStateChange}
              />
            </View>
          )}
          <View style={{paddingHorizontal: mScale(20)}}>
            <Text style={styles.detailsText}>Details</Text>
            <Text style={styles.text}>
              {detailsQuery.data?.title ?? detailsQuery.data?.name}
            </Text>
            <View>
              <Text style={styles.text}>
                {detailsQuery.data?.release_date ??
                  detailsQuery.data?.first_air_date}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Starts width={10} heigh={10} />
                <Text style={[styles.text, {marginLeft: 10}]}>
                  {detailsQuery.data?.vote_average?.toFixed()}/10
                </Text>
              </View>

              <Text style={styles.text}>{detailsQuery.data?.overview}</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {},
  detailsText: {
    color: theme.colors.netflixRed,
    fontFamily: theme.font.extraBold,
    fontSize: theme.font.xl,
  },
  text: {
    color: theme.colors.text,
    fontFamily: theme.font.bold,
    marginVertical: mScale(10),
  },
}));

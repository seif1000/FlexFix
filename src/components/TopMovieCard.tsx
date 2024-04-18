import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import type {Movie} from '../types/models/Movie';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {mScale} from '../styles/mixins';
import Ripple from 'react-native-material-ripple';

type MovieCardProps = {
  item: Movie;
};

export default function TopMovieCard({item}: MovieCardProps) {
  const {styles} = useStyles(stylesheet);
  return (
    <Ripple>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
        }}
        blurRadius={2}
        style={styles.image}
        borderRadius={mScale(10)}>
        <View style={styles.textView}>
          <Text style={styles.text}>{item?.name ?? item?.title}</Text>
          <Text style={styles.text}> {item?.vote_average?.toFixed(0)}/10</Text>
        </View>
      </ImageBackground>
    </Ripple>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {},
  image: {
    width: mScale(150),
    height: mScale(200),
    borderRadius: mScale(10),
    marginRight: mScale(10),
    paddingHorizontal: mScale(10),
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  text: {
    color: theme.colors.netflixRed,
    //fontSize: mScale(15),
    fontWeight: theme.font.extraBold,
  },
}));

import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import type {Movie} from '../types/models/Movie';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {mScale} from '../styles/mixins';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

type MovieCardProps = {
  item: Movie;
  type: string;
};

export default function MovieCard({item, type}: MovieCardProps) {
  const {styles, theme} = useStyles(stylesheet);
  const navigation = useNavigation();
  return (
    <Ripple
      onPress={() => {
        navigation.navigate('MovieDetails', {
          id: item.id,
          type: type,
        });
      }}
      style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
        }}
        style={styles.image}
        borderRadius={mScale(10)}
      />
      <View style={styles.textView}>
        <Text style={styles.text}>{item?.name ?? item?.title}</Text>
        <Text
          style={[
            styles.text,
            {color: theme.colors.netflixRed, fontWeight: theme.font.regular},
          ]}>
          {' '}
          {item?.vote_average?.toFixed(0)}/10
        </Text>
      </View>
    </Ripple>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: mScale(10),
  },
  image: {
    width: mScale(100),
    height: mScale(150),
    borderRadius: mScale(10),
    marginRight: mScale(10),
    paddingHorizontal: mScale(10),
  },
  textView: {
    alignSelf: 'flex-start',
  },
  text: {
    color: theme.colors.title,
    //fontSize: mScale(15),
    fontWeight: theme.font.extraBold,
  },
}));

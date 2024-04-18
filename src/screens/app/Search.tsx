import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createStyleSheet} from 'react-native-unistyles';
import {mScale} from '../../styles/mixins';
import Header from '@components/Header';

export default function Search() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header text="Series" hasBack={true} hasSearch={false} />
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

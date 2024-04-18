import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import BackIcon from '@assets/icons/back-arrow.svg';
import SearchIcon from '@assets/icons/book.svg';
import {useNavigation} from '@react-navigation/native';
import {mScale, screenWidth} from '../styles/mixins';

type Props = {
  text: string;
  hasBack?: boolean;
  hasSearch?: boolean;
};

export default function Header({text, hasBack, hasSearch}: Props) {
  const {styles, theme} = useStyles(stylesheet);
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {hasBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon width={25} height={25} color={theme.colors.netflixRed} />
          </TouchableOpacity>
        )}
        <View>
          <Text
            style={[
              styles.text,
              {
                marginLeft: hasBack ? mScale(20) : 0,
              },
            ]}>
            {text}
          </Text>
        </View>
      </View>
      {hasSearch && (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <SearchIcon width={25} height={25} color={theme.colors.netflixRed} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth,
    paddingHorizontal: mScale(20),
  },
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',

    alignItems: 'center',
    height: mScale(50),
  },
  text: {
    fontSize: theme.font.xl,
    color: theme.colors.title,
  },
}));

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import BackIcon from '@assets/icons/back-arrow.svg';
import {useNavigation} from '@react-navigation/native';
import {mScale, screenWidth} from '../styles/mixins';

type Props = {
  text: string;
  hasBack?: boolean;
};

export default function Header({text, hasBack}: Props) {
  const {styles, theme} = useStyles(stylesheet);
  const navigation = useNavigation();
  return (
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
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    paddingHorizontal: mScale(20),
    width: screenWidth,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: theme.font.xl,
    color: theme.colors.title,
  },
}));

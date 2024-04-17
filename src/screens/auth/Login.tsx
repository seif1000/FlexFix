import {View, Text} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export default function Login() {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unistyles example</Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
  },
}));

import {Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '@components/Header';
import auth from '@react-native-firebase/auth';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {UnistylesRuntime} from 'react-native-unistyles';

export default function Setting() {
  const {theme, styles} = useStyles(stylesheet);

  return (
    <SafeAreaView>
      <Header text="Settings" hasBack={false} />
      <TouchableOpacity
        style={styles.row}
        onPress={() =>
          UnistylesRuntime.setTheme(
            UnistylesRuntime.themeName == 'light' ? 'dark' : 'light',
          )
        }>
        <Image
          source={require('@assets/icons/night-mode.png')}
          style={{
            width: 25,
            height: 25,
            tintColor: theme.colors.netflixRed,
          }}
        />
        <Text style={{color: theme.colors.text, padding: 20, fontSize: 20}}>
          Change Theme
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Image
          source={require('@assets/icons/logout.png')}
          style={{
            width: 25,
            height: 25,
            tintColor: theme.colors.netflixRed,
          }}
        />
        <Text
          style={{color: theme.colors.text, padding: 20, fontSize: 20}}
          onPress={() => {
            auth().signOut();
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {},
  text: {
    color: theme.colors.text,
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
}));

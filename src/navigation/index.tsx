import {View, Text} from 'react-native';
import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useStyles} from 'react-native-unistyles';
import {navDarkTheme, navLightTheme} from '../styles/nav-themes';

type NavigationProps = {
  onReady: () => void;
};
export default function Root({onReady}: NavigationProps) {
  const {theme} = useStyles();

  const navTheme = useMemo(() => {
    if (theme.isDark) {
      return navDarkTheme;
    }

    return navLightTheme;
  }, [theme.isDark]);

  return (
    <NavigationContainer onReady={onReady} theme={navTheme}>
      {false ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

import {View, Text} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useStyles} from 'react-native-unistyles';
import {navDarkTheme, navLightTheme} from '../styles/nav-themes';
import auth from '@react-native-firebase/auth';

type NavigationProps = {
  onReady: () => void;
};
export default function Root({onReady}: NavigationProps) {
  const {theme} = useStyles();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const navTheme = useMemo(() => {
    if (theme.isDark) {
      return navDarkTheme;
    }

    return navLightTheme;
  }, [theme.isDark]);

  if (initializing) return null;

  return (
    <NavigationContainer onReady={onReady} theme={navTheme}>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

import './styles/unistyles';
import {View, Text, Image} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import HeaderIcon from '@assets/icons/header.svg';
import Login from '@screens/auth/Login';
import Root from '@navigation';

export default function App() {
  const {styles} = useStyles(stylesheet);
  return <Root />;
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.ashenvaleNights,
  },
  text: {
    color: theme.colors.green,
  },
}));

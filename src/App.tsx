import './styles/unistyles';

import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

import Root from '@navigation';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from '@redux/store';

export default function App() {
  const {styles} = useStyles(stylesheet);
  return (
    <Provider store={store}>
      <Root onReady={() => {}} />
      <FlashMessage position="bottom" />
    </Provider>
  );
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

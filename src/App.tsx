import './styles/unistyles';

import React, {useEffect} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

import Root from '@navigation';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from '@redux/store';
import BootSplash from 'react-native-bootsplash';
export default function App() {
  const {styles} = useStyles(stylesheet);

  useEffect(() => {
    const init = async () => {
      setTimeout(() => {}, 3000);
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
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

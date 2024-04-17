import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '@components/Header';

export default function Serie() {
  return (
    <SafeAreaView>
      <Header text="Series" hasBack={false} />
    </SafeAreaView>
  );
}

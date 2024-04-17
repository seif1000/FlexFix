import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '@components/Header';
import auth from '@react-native-firebase/auth';

export default function Setting() {
  return (
    <SafeAreaView>
      <Header text="Settings" hasBack={false} />
      <Text
        onPress={() => {
          auth().signOut();
        }}>
        Logout
      </Text>
    </SafeAreaView>
  );
}

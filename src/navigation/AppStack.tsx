import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../types/navigation';
import ButtomTab from './TabStack';
import Details from '@screens/app/Details';
import Search from '@screens/app/Search';

const AppNavigator = createNativeStackNavigator<RootStackParamList>();
export default function AppStack() {
  return (
    <AppNavigator.Navigator screenOptions={{headerShown: false}}>
      <AppNavigator.Screen name={'AppStack'} component={ButtomTab} />
      <AppNavigator.Screen name={'MovieDetails'} component={Details} />

      <AppNavigator.Screen name={'Search'} component={Search} />
    </AppNavigator.Navigator>
  );
}

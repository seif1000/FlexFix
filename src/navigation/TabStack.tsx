import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import type {AppStackParamList} from '../types/navigation';
import Movie from '@screens/app/Tabs/Movie';
import Serie from '@screens/app/Tabs/Serie';
import Setting from '@screens/app/Tabs/Setting';

const Tab = createBottomTabNavigator<AppStackParamList>();

const ButtomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, lazy: false}}>
      <Tab.Screen name={'Movies'} component={Movie} />
      <Tab.Screen name={'Series'} component={Serie} />
      <Tab.Screen name={'Settings'} component={Setting} />
    </Tab.Navigator>
  );
};

export default ButtomTab;

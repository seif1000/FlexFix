import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {AuthStackParamList} from '../types/navigation';
import Login from '@screens/auth/Login';
import Register from '@screens/auth/Register';

const AuthNavigator = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <AuthNavigator.Navigator screenOptions={{headerShown: false}}>
      <AuthNavigator.Screen name={'Login'} component={Login} />
      <AuthNavigator.Screen name={'Register'} component={Register} />
    </AuthNavigator.Navigator>
  );
}

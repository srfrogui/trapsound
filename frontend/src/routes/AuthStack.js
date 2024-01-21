import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../pages/auth/FirstScreen';
import LoginScreen from '../pages/auth/LoginForm';
import RegisterScreen from '../pages/auth/RegisterForm';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

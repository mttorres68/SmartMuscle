import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import Home from './src/pages/home';
import Login from './src/pages/login';
import SingUp from './src/pages/SingUp';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"S
          component={Home}
          options={{
            headerTintColor:"#F65006"
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor:"#F65006"
          }}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{
            headerTintColor:"#F65006"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

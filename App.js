import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Home from './src/pages/home';
import Login from './src/pages/login';
import SingUp from './src/pages/SingUp';
import TrainigDetails from './src/pages/trainigDetails';
import TrainigData from './src/pages/trainigData';
import UserProfile from './src/pages/userProfile';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function Tabs(){  
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({        
        tabBarIcon: ({focused, color, size}) => {
          let iconName;          
          if(route.name === 'TrainigDetails'){
            iconName = focused ? 'ios-barbell' : 'ios-barbell-outline'            
          }else if(route.name === 'Data'){
            iconName = focused ? 'md-pie-chart' : 'md-pie-chart-outline'            
          }else if(route.name === 'Profile'){
            iconName = focused ? 'ios-person' : 'ios-person-outline'            
          }

          return <Ionicons name={iconName} size={30} color={color}  />
        },
        tabBarStyle: {
          backgroundColor: '#F49D1A',
        },
        tabBarShowLabel:false,    
        lazy: true,
        tabBarActiveTintColor: '#DE4217',
        tabBarInactiveTintColor: '#F2F2F2',
        headerShown: false,
        unmountOnBlur: true,
        
        
        
      })}
    >
        <Tab.Screen
          name="TrainigDetails"
          component={TrainigDetails}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen 
            name='Data'
            component={TrainigData}
            options={{
              headerShown: false,
            }}
        />
        <Tab.Screen 
            name='Profile'
            component={UserProfile}
            options={{
              headerShown: false,
            }}
        />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PageTrainig"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        
        
      </Stack.Navigator>        
    </NavigationContainer>
  );
}

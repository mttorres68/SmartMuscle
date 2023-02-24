import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons';

import Home from './src/pages/home';
import Login from './src/pages/login';
import SingUp from './src/pages/SingUp';
import TrainigDetails from './src/pages/trainigDetails';
import TrainigData from './src/pages/trainigData';
import UserProfile from './src/pages/userProfile';
import traingSmart from './src/pages/trainigDetails/traingSmart';
import myTraing from './src/pages/trainigDetails/myTraing/index'
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function Traing(){
  const width = Dimensions.get('window').width

  return(
    <TopTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          width: width,
          backgroundColor: '#F49D1A',
          elevation:2,          
          borderTopWidth:0
        },
        tabBarLabelStyle: { 
          fontSize: 18,
          fontWeight:'500',
          textTransform:'capitalize'          
        },
        tabBarShowLabel:true,
        lazy: true,
        tabBarActiveTintColor: '#DE4217',
        tabBarInactiveTintColor: '#F2F2F2',
        headerShown: false,
        unmountOnBlur: false,
        tabBarIndicatorStyle:{
          backgroundColor:'#DE4217'
        }
      })}
    >
      <TopTabs.Screen 
        name='Treino SmartMuscle'
        component={traingSmart}
        options={{
          headerShown:false,
          tabBarPressColor:'#F54645',
        }}
      />
      <TopTabs.Screen 
        name='Meu Treino'
        component={myTraing}
        options={{
          tabBarLabel:'Meu Treino',
          headerShown:true,
          tabBarPressColor:'#F54645',
        }}
      />

    </TopTabs.Navigator>
  )
}

function Tabs(){  
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({        
        tabBarIcon: ({focused, color, size}) => {
          let iconName;          
          if(route.name === 'TrainigDetails'){
            iconName = focused ? 'ios-barbell' : 'ios-barbell-outline'            
          }else if(route.name === 'Data'){
            iconName = focused ? 'stats-chart' : 'stats-chart-outline'            
          }else if(route.name === 'Profile'){
            iconName = focused ? 'ios-person' : 'ios-person-outline'            
          }

          return <Ionicons name={iconName} size={30} color={color}  />
        },
        tabBarStyle: {
          backgroundColor: '#F49D1A',
          paddingBottom:5,
        },
        tabBarShowLabel:true,    
        lazy: true,
        tabBarActiveTintColor: '#DE4217',
        tabBarInactiveTintColor: '#F2F2F2',
        headerShown: false,
        unmountOnBlur: true,
      })}
    >
        <Tab.Screen
          name="TrainigDetails"
          component={Traing}
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

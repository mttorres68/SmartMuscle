import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Text, View } from 'react-native';

// PAGINAS
import Home from './src/pages/home';
import Login from './src/pages/login';
import SingUp from './src/pages/SingUp';
import TrainigData from './src/pages/trainigData';
import UserProfile from './src/pages/userProfile';

import myTraing from './src/pages/trainig/myTraing/'
import Trainig from './src/pages/trainig';
import TraingSmart from './src/pages/trainig/traingSmart';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();


const Segunda = () =>{

  return(
    <View>
      <Text>
        Segunda
      </Text>
    </View>
  )
}
const Quarta = () =>{

  return(
    <View>
      <Text>
        Terça
      </Text>
    </View>
  )
}
const Quinta = () =>{

  return(
    <View>
      <Text>
      Quinta
      </Text>
    </View>
  )
}
const Sexta = () =>{

  return(
    <View>
      <Text>
      Sexta
      </Text>
    </View>
  )
}
const Sabado = () =>{

  return(
    <View>
      <Text>
      Sabado
      </Text>
    </View>
  )
}
const Terca = () =>{

  return(
    <View>
      <Text>
        Terça
      </Text>
    </View>
  )
}


function TreinosSemanas(){
  return(
    <TopTabs.Navigator
      screenOptions={({route}) => ({
        tabBarStyle:{
          position:'relative'
        }
      })}
    >      
        <TopTabs.Screen name='Seg' component={Segunda}/>
        <TopTabs.Screen name='Ter' component={Terca}/>
        <TopTabs.Screen name='Qua' component={Quarta}/>      
        <TopTabs.Screen name='Qui' component={Quinta}/>      
        <TopTabs.Screen name='Sex' component={Sexta}/>      
        <TopTabs.Screen name='Sab' children={Sabado}/>

    </TopTabs.Navigator>
  )
}

// ROTAS DE TREINOS -SMART -PESSOAL
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
          textTransform:'capitalize',
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
        component={TraingSmart}
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

// ROTAS DA TAB BAR -TREINOS -DADOS -PERFIL
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

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Menu from '../screens/Menu';

const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor="white"
      inactiveColor="black"
      barStyle={{ 
        backgroundColor: '#5c5b5b' }}
      screenOptions={{ headerShown: false }}
      
      
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="log-in" color={color} size={25} />,
          tabBarLabel: 'Login',
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="adduser" color={color} size={25} />,
          tabBarLabel: 'Registro',
          
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="menu" color={color} size={25} />,
          tabBarLabel: 'Menu',
        }}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  HomeStackNavigator2,
  BlogStackNavigator,
  MessageStackNavigator,
  ProfileStackNavigator,
  CalenderStackNavigator,

} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2DE1BD',
        inactiveTintColor: '#FBB663',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator2}
        options={{
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={40} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Choose"
        component={BlogStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-thick"
              color={color}
              size={40}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator}
      options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;


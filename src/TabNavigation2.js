import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  HomeStackNavigator3,
  BlogStackNavigator,
  MessageStackNavigator,
  ProfileStackNavigator2,
  CalenderStackNavigator2,

} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator2 = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2DE1BD',
        inactiveTintColor: '#FBB663',
        showLabel: false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator3}
        options={{
          
          tabBarIcon: ({ color, }) => (
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
        component={CalenderStackNavigator2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStackNavigator2}
      options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator2;


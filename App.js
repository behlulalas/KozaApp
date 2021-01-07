
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/TabNavigator";
import StackNavigator from "./src/StackNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App
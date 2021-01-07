import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from '../src/TabNavigator';
import BottomTabNavigator2 from '../src/TabNavigation2';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import SendEposta from './pages/SendEposta';
import PasswordReset from './pages/PasswordReset';
import Message from './pages/Message';
import DanismanProfil from './pages/DanismanProfil';
import DanismanInfo from './pages/DanismanInfo';
import DanismanEdit from './pages/DanismanEdit';
import Ozgecmis from './pages/Ozgecmis';
import Cards from './pages/Cards';
import Choose from './pages/Choose';
import Question from './pages/Question';
import LastQuestion from './pages/LastQuestion';
import DanisanInfo from './pages/DanisanInfo';
import DanisanProfil from './pages/DanisanProfil';
import DanisanEdit from './pages/DanisanEdit';
import HealthInfo from './pages/HealthInfo';
import HealthData from './pages/HealthData';
import AdvisorsForyou from './pages/AdvisorsForyou';
import Advisors from './pages/Advisors';

import BlogDetay from './pages/BlogDetay';
import DanismanLogin from './pages/DanismanLogin';
import DateCalendar from './pages/DateCalendar';
import DanismanTakvim from './pages/DanismanTakvim';
import LastReservation from './pages/LastReservation';
import LastReservation2 from './pages/LastReservation2';
import Blog from './pages/Blog';
import Sozlesme from './pages/Sozlesme';
import { Button } from 'react-native';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerTransparent: true,
  headerShown: true,
  headerBackTitle: (
    <Icon
      raised
      name="information-circle"
      color="#fff"
      size={26}
      onPress={() => console.log('hello')}
    />
  ),
};
const screenOptionStyle2 = {
  headerTransparent: true,
  headerShown: true,
  headerBackTitle: (
    <Icon
      raised
      name="information-circle"
      color="#fff"
      size={26}
      onPress={() => console.log('hello')}
    />
  ),
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle2}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerLeft: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DanismanLogin" component={DanismanLogin} />
      <Stack.Screen name="SendEposta" component={SendEposta} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabNavigator2"
        component={BottomTabNavigator2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const HomeStackNavigator2 = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="DanismanTakvim"
        component={DanismanTakvim}
        options={{ headerLeft: false }}
      />
    </Stack.Navigator>
  );
};

const BlogStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="BlogDetay"
        component={BlogDetay}
        options={{ headerLeft: false }}
      />
      <Stack.Screen name="Blog" component={Blog} />
    </Stack.Navigator>
  );
};
const MessageStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Mesaj"
        options={{
          headerLeft: false,
        }}
        component={Message}
      />
    </Stack.Navigator>
  );
};
const CalenderStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Reservation" component={DateCalendar} />
    </Stack.Navigator>
  );
};
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Danisman Profil"
        component={DanismanProfil}
        options={{ headerLeft: false }}
      />
      <Stack.Screen name="DanismanInfo" component={DanismanInfo} />
      <Stack.Screen name="DanismanEdit" component={DanismanEdit} />
      <Stack.Screen name="Ozgecmis" component={Ozgecmis} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{ headerShown: false, tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
};

const HomeStackNavigator3 = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Choose"
        component={Choose}
        options={{ headerLeft: false }}
      />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="LastQuestion" component={LastQuestion} />
      <Stack.Screen name="AdvisorsForyou" component={AdvisorsForyou} />
      <Stack.Screen name="Advisors" component={Advisors} />
    </Stack.Navigator>
  );
};
const CalenderStackNavigator2 = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="LastReservation2" component={LastReservation2} />
    </Stack.Navigator>
  );
};
const ProfileStackNavigator2 = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Danisan Profil"
        component={DanisanProfil}
        options={{ headerLeft: false }}
      />
      <Stack.Screen name="DanisanInfo" component={DanisanInfo} />
      <Stack.Screen name="DanisanEdit" component={DanisanEdit} />
      <Stack.Screen name="HealthInfo" component={HealthInfo} />
      <Stack.Screen name="HealthData" component={HealthData} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{ headerShown: false, tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

export {
  HomeStackNavigator2,
  MessageStackNavigator,
  CalenderStackNavigator,
  ProfileStackNavigator,
  BlogStackNavigator,
  HomeStackNavigator3,
  CalenderStackNavigator2,
  ProfileStackNavigator2,
};

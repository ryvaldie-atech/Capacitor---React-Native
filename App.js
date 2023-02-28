// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import TimeTrackerScreen from './pages/TimeTrackerScreen';
import CapacityScreen from './pages/CapacityScreen';
import RequestScreen from './pages/RequestScreen';
import SettingsScreen from './pages/SettingScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function TimeTrackerStack() {
  return (
    <Stack.Navigator
      initialRouteName="TimeTracker"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="TimeTracker"
        component={TimeTrackerScreen} />
    </Stack.Navigator>
  );
}

function CapacityStack() {
  return (
    <Stack.Navigator
      initialRouteName="Capacity"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Capacity"
        component={CapacityScreen} />
    </Stack.Navigator>
  );
}

function RequestStack() {
  return (
    <Stack.Navigator
      initialRouteName="Request"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Request"
        component={RequestScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', color: '#333333' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerLeft: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home'
          }} />
        <Tab.Screen
          name="TimeTrackerStack"
          component={TimeTrackerStack}
          options={{
            tabBarLabel: 'Time Tracker',
            title: 'Time Tracker',
          }} />
        <Tab.Screen
          name="CapacityStack"
          component={CapacityStack}
          options={{
            tabBarLabel: 'Capacity',
            title: 'Capacity',
          }} />
        <Tab.Screen
          name="RequestStack"
          component={RequestStack}
          options={{
            tabBarLabel: 'Request',
            title: 'Request',
          }} />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting'
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

/* Import of all screens for react navigation */
import InputScreen from "../screens/input";
import ViewScreen from "../screens/view";
import SettingsScreen from "../screens/settings";
import MenuScreen from "../screens/menu";

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#037171',
        tabBarActiveTintColor: '#03312E',
        headerShown: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#02C3BD',
          left: 0,
          right: 0,
          height: 60,
          paddingBottom: 8,
          borderTopLeftRadius: 8, 
          borderTopRightRadius: 8, 
        },
        headerTintColor: '#02C3BD',
        headerStyle: {
          backgroundColor: '#02C3BD',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          height: 40
        },
        headerTitleStyle: {
          fontSize: 1,
        },
      }}>

      <Tab.Screen name="Home" component={MenuScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name="Input" component={InputScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="duplicate-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name="View" component={ViewScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="folder-outline" color={color} size={size} />),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cog-outline" color={color} size={size} />),
      }} />

    </Tab.Navigator>
  )
}
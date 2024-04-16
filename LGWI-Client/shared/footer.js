import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

/* Import of all screens for react navigation */
import InputScreen from "../screens/input";
import ViewScreen from "../screens/users";
import SettingsScreen from "../screens/settings";
import DashboardScreen from "../screens/dashboard";
import { useTranslation } from 'react-i18next';

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#037171',
        tabBarActiveTintColor: '#03312E',
        headerShown: true,
        tabBarStyle: {
          position: 'relative',
          backgroundColor: '#02C3BD',
          left: 0,
          right: 0,
          height: 100,
          paddingBottom: 8,
          borderTopLeftRadius: 8, 
          borderTopRightRadius: 8,
          justifyContent: 'flex-start',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 32,
        },
        headerTintColor: '#02C3BD',
        headerStyle: {
          backgroundColor: '#02C3BD',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          height: 80
        },
        headerTitleStyle: {
          fontSize: 1,
          fontWeight: 'bold',
        },
      }}>

      <Tab.Screen name={t("screens.footer.text.dashboard")} component={DashboardScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="analytics-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name={t("screens.footer.text.input")} component={InputScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="duplicate-outline" color={color} size={size} />),
      }} />

      <Tab.Screen name={t("screens.footer.text.users")} component={ViewScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="folder-outline" color={color} size={size} />),
      }} />
      <Tab.Screen name={t("screens.footer.text.settings")} component={SettingsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cog-outline" color={color} size={size} />),
      }} />

    </Tab.Navigator>
  )
}
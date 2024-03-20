import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/* Import of all screens for react navigation */
//import firestore from '@react-native-firebase/firestore';
import HomeScreen from "./screens/home";
import DatabaseTest from "./screens/DatabaseTest";
import InputScreen from "./screens/input";
import ViewScreen from "./screens/users";
import SettingsScreen from "./screens/settings";
import DashboardScreen from "./screens/dashboard";
import Tabs from './shared/footer';
import AccountViewScreen from './screens/accountview';
import ConformationScreen from './screens/conformation';
import './localization/i18n';

//Stack Navigaitor
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {/*Home Screen*/}
        <Stack.Group
          screenOptions={{
            headerShown: false,
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#02C3BD',
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>

        {/*Stack group for main pages */}
        <Stack.Group
          screenOptions={{
            title: '',
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#02C3BD',
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
          }}>
          <Stack.Screen name="DatabaseTest" component={DatabaseTest} />
          <Stack.Screen name="tabsHome" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Input" component={InputScreen} />
          <Stack.Screen name="View" component={ViewScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="AccountView" component={AccountViewScreen} />
          <Stack.Screen name="Conformation" component={ConformationScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

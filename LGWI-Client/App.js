import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Import of all screens for react navigation */
import HomeScreen from "./screens/home";
import InputScreen from "./screens/input";
import ViewScreen from "./screens/view";
import SettingsScreen from "./screens/settings";
import LoginScreen from "./screens/login";
import MenuScreen from "./screens/menu";
import Tabs from './shared/footer';
import AccountViewScreen from './screens/accountview';

//Stack Navigaitor
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {/*Stack group for home login and register screen */}
        <Stack.Group
          screenOptions={{
            title: 'LGWI Management System',
            headerTitleStyle: {
              fontSize: 24,
            },
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
          <Stack.Screen name="Login" component={LoginScreen} />
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
          <Stack.Screen name="tabsHome" component={Tabs} options={{ headerShown: false, }} />
          <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Input" component={InputScreen} />
          <Stack.Screen name="View" component={ViewScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="AccountView" component={AccountViewScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

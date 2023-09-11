import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Import pages
import Login from "./src/pages/Login";
import SignIn from "./src/pages/SignIn";
import CreateAccount from "./src/pages/CreateAccount";

import Scanner from "./src/pages/Scanner";
import Test from "./src/pages/Test";

const Tab = createBottomTabNavigator()

export default function App(){
  return (
    <SafeAreaProvider className="bg-main-background">
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Scanner" component={Scanner}></Tab.Screen>
          <Tab.Screen name="Test" component={Test}></Tab.Screen>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignIn" component={SignIn} />
          <Tab.Screen name="CreateAccount" component={CreateAccount} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
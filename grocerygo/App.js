import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Import pages
import Login from "./src/pages/Login";
import SignIn from "./src/pages/SignIn";
import CreateAccount from "./src/pages/CreateAccount";

export default function App() {
  return (
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="CreateAccount" component={CreateAccount} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
  );
}
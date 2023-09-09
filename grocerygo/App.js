import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scanner from "./src/pages/Scanner";
import { NavigationContainer } from "@react-navigation/native";
import Test from "./src/pages/Test";

const Tab = createBottomTabNavigator()

export default function App(){
  return (
    <SafeAreaProvider className="bg-main-background">
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Scanner" component={Scanner}></Tab.Screen>
          <Tab.Screen name="Test" component={Test}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
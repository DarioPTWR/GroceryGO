import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationAction, StackActions } from "react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Scanner from "./src/pages/Scanner";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator()

export default function App(){
  return (
    <SafeAreaProvider className="bg-main-background">
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Scanner" component={Scanner}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
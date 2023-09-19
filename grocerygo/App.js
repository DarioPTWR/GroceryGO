import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from 'expo-font';

// Import pages
import Login from "./src/pages/Login";
import SignIn from "./src/pages/SignIn";
import CreateAccount from "./src/pages/CreateAccount";
import Preference from './src/pages/Preference'
import Scanner from "./src/pages/Scanner";
import Test from "./src/pages/Test";
import Profile from "./src/pages/Profile";
import Item from "./src/pages/Item";

const Tab = createBottomTabNavigator();
// Create the Bottom Tab
<Tab.Navigator className = 'bg-white'
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;
      if (route.name === "Preference") {
        iconName = "Preference";
      } 
      return (
        <MaterialCommunityIcons
          name={iconName}
          size={30}
          color={color}
          style={{ height: 30 }}
        />
      );
    }
  })}
></Tab.Navigator>

export default function App(){
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='Login'
        >
          <Tab.Screen name="Scanner" component={Scanner} />
          {/* <Tab.Screen name="Test" component={Test} /> */}
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignIn" component={SignIn} />
          <Tab.Screen name="CreateAccount" component={CreateAccount} />
          <Tab.Screen name="Preference" component={Preference} />
          <Tab.Screen name ="Profile" component={Profile} />
          <Tab.Screen name="Item" component={Item} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

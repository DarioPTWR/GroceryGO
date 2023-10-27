import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
// Import pages
import Login from "./src/pages/Login";
import SignIn from "./src/pages/SignIn";
import CreateAccount from "./src/pages/CreateAccount";
import Preference from "./src/pages/Preference2";
import Scanner from "./src/pages/Scanner";
import Test from "./src/pages/Test";
import Comparison from "./src/pages/Comparison";
import Profile from "./src/pages/Profile";
import Item from "./src/pages/Item";
import Personal from "./src/pages/PersonalInformation";
import SelectStore from "./src/pages/SelectStore";
import Preference2 from "./src/pages/Preference2";

// Create the Bottom Tab
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ScannerStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainScanner"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainScanner" component={Scanner} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Comparison" component={Comparison} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            backgroundColor: '#AC3333',
            height: 60
          },
        }}
        initialRouteName="Profile"
      >
        <Tab.Screen
          name="Scanner"
          component={CreateAccount}
          options={{
            tabBarLabel: "", // Hide the label
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="qr-code-scanner" size={34} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Preference"
          component={Preference}
          options={{
            tabBarLabel: "", // Hide the label
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="form" size={34} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "", // Hide the label
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={34}
                color="white"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Preference" component={Preference2} />
          <Stack.Screen name="Personal" component={Personal} />
          <Stack.Screen name="SelectStore" component={SelectStore} />
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="ScannerStack" component={ScannerStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

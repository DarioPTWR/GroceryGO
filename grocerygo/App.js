import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

// Import pages
import Login from "./src/pages/Login";
import SignIn from "./src/pages/SignIn";
import CreateAccount from "./src/pages/CreateAccount";
import Preference from "./src/pages/Preference";
import Scanner from "./src/pages/Scanner";
import Test from "./src/pages/Test";
import Comparison from "./src/pages/Comparison";
import Profile from "./src/pages/Profile";
import Item from "./src/pages/Item";

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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Scanner"
    >
      <Tab.Screen name="Scanner" component={ScannerStack} />
      <Tab.Screen name="Preference" component={Preference} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="ScannerStack" component={ScannerStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

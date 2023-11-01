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
import Offers from "./src/pages/Offers";
// import Profile from "./src/pages/Profile";
import Item from "./src/pages/Item";
import Personal from "./src/pages/PersonalInformation";
import SelectStore from "./src/pages/SelectStore";
import Preference2 from "./src/pages/Preference2";
import Profile2 from "./src/pages/Profile2";
import Item2 from "./src/pages/Item2";
import RecipeInformation from "./src/pages/RecipeInformation";
import HomePage from "./src/pages/HomePage";
import SelectRecipes from "./src/pages/SelectRecipes";
import Offers from "./src/pages/Offers";
import { green } from "tailwindcss/colors";

// Create the Bottom Tab
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function HomeTabs() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        initialRouteName='Item2'
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            position: 'absolute',
            bottom:20,
            right:16  ,
            left:16,
            paddingRight:40,
            paddingLeft:40,
            borderRadius: 30,
            justifyContent: 'center', 
            alignItems: 'center', 
            // borderColor:'black',
            // borderWidth:1
          },
          tabBarLabelStyle: {
            marginBottom: -25, // Adjust this value to reduce the gap
          },
        }}
      >
        <Tab.Screen
          name='HomePage'
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={40} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name='Scanner'
          component={ScannerStack}
          options={{
            tabBarLabel: 'Scan',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="qr-code-scanner" size={40} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name='RecipeInformation'
          component={RecipeInformation}
          options={{
            tabBarLabel: 'Meals',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="restaurant" size={50} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name='Offers'
          component={Offers}
          options={{
            tabBarLabel: 'Offers',
            
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-offer" size={40} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name='Profile2'
          component={Profile2}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle-outline" size={40} color="black" />
            ),
          }}

        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}
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
            tabBarLabel: '', // Hide the label
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="form" size={34} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile2"
          component={Profile2}
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
          initialRouteName="Home"
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
          <Stack.Screen name="Profile2" component={Profile2} />
          <Stack.Screen name='Item2' component={Item2} />
          <Stack.Screen name='RecipeInformation' component={RecipeInformation} />
          <Stack.Screen name='Offers' component={Offers} />
          <Stack.Screen name='HomePage' component={HomePage} />
          <Stack.Screen name='SelectRecipes' component={SelectRecipes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

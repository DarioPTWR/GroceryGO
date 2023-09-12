import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from
  "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions }
  from "@react-navigation/native";
import { SafeAreaProvider } from
  "react-native-safe-area-context";
import MaterialCommunityIcons from
  "@expo/vector-icons/MaterialCommunityIcons";

import Preference from './src/pages/Preference'


// export default function App() {
//   return (
//     <View className="">
//       <Text className="text-1xl">tesdast</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
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

const App = () => {
  return (
    // Avoid things like notches with SafeAreaProvider
    <SafeAreaProvider className = 'bg-main-green'>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Preference" component={Preference}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App
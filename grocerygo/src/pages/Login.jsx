import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Button from "../components/Buttons/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  // async function getUsername(){
  //   try {
  //     const username = await AsyncStorage.getItem('username');
  //     console.log(username)
  //     return jsonValue != null ? username : null;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // if(getUsername()) navigation.navigate('Home', {screen: 'Scanner'})

  return (
    <View className="h-screen justify-center bg-main-background flex-1">
      <Image
        className="object-fill w-52 h-52 mx-auto mb-2"
        source={require("../../assets/grocerygo.jpg")}
      />
      <Text className="text-5xl font-extrabold text-[#355D4E] mx-auto">
        GROCERYGO
      </Text>
      <Text className="text-center mb-20 font-semibold text-[#355D4E] text-lg p-2 mx-3">
        Your Ultimate AI Grocery Companion
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
        buttonText={"GET STARTED"}
      />
      {/* <Pressable
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text className="text-center text-lg text-[#355D4E] left-7">
          → Or create an account
        </Text>
      </Pressable> */}
      <Pressable
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        className="flex flex-col items-center active:scale-95 transition"
      >
        <View className="py-2 w-4/5 max-w-lg h-12 rounded-full mb-6 border-2 border-[#355D4E]">
          <Text className="text-[#355D4E] text-lg text-center">I ALREADY HAVE AN ACCOUNT</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Login;

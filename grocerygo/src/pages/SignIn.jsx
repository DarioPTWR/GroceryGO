import React, { useState } from "react";
import { View, Text, Pressable, Image, Touchable } from "react-native";
import Button from "../components/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import axios from "axios";

// Import components
import BackButton from "../components/BackButton";
import FormInput from "../components/FormInput";
import baseURL from "../baseURL";
import { useCardAnimation } from "react-navigation-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigation = useNavigation();
  const onPressSignIn = (e) => {
    e.preventDefault();
    console.log(emailUsername, password);
    axios
      .post(`${baseURL}/verifyUser`, {
        emailUsername: emailUsername,
        password: password,
      })
      .then(async (res) => {
        console.log(res.data);
        try {
          await AsyncStorage.setItem('username', emailUsername);
          navigation.navigate("Home", {screen: 'Scanner'});
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => {
        setErrMessage(err.response.data);
      });
  };
  return (
    <SafeAreaView className="h-screen bg-[#fff4ec] flex-1">
      <BackButton navigation={navigation} />
      <Text className="font-bold text-6xl mt-9 mx-9">Welcome Back!</Text>
      <Text className="mx-10 text-xl mb-20">We're glad to have you back.</Text>
      <View className="w-80 mx-auto mb-10">
        <FormInput
          name={"Email / Username"}
          Input={emailUsername}
          setInput={setEmailUsername}
          secure={false}
          validate={() => {}}
        />
        <FormInput
          name={"Password"}
          Input={password}
          setInput={setPassword}
          secure={true}
          validate={() => {}}
        />
        <GestureHandlerRootView>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
      <Text className="mx-auto mb-2 text-[#E11D48] text-center">
        {errMessage}
      </Text>
      <Button buttonText="Sign In" onPress={onPressSignIn} />
    </SafeAreaView>
  );
};

export default SignIn;

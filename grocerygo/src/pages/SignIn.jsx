import React, { useState } from "react";
import { View, Text, Pressable, Image, Touchable } from "react-native";
import Button from "../components/Buttons/Button";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import axios from "axios";

// Import components
import BackButton from "../components/Buttons/BackButton";
import FormInput from "../components/FormInput";
import baseURL from "../baseURL";
import { useCardAnimation } from "react-navigation-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SideButton from "../components/Buttons/SideButton";
import userImg from "../../assets/user.png";
import passwordImg from "../../assets/password.png";
import { auth } from "../config/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigation = useNavigation();

  const onPressSignIn = async (e) => {
    console.log("hu")
    e.preventDefault();
    console.log(email, password);
    try{
      let userCredentials = await signInWithEmailAndPassword(auth, email, password)
      await AsyncStorage.setItem('email', JSON.stringify(userCredentials.user));
    } catch (err) {
      console.error(err)
      if(err.code === "auth/invalid-email"){
        setErrMessage("Invalid email")
      } else if(err.code === "auth/invalid-login-credentials"){
        setErrMessage("Invalid login credentials")
      } else if(err.code === "auth/too-many-requests"){
        setErrMessage("Too many attempts. Reset your password or try again later.")
      } 
    }
  };
  return (
    <SafeAreaView className="h-screen bg-main-background flex-1">
      <BackButton navigation={navigation} />
      <Image
        className="object-fill w-24 h-24 mx-9 mt-14"
        source={require("../../assets/grocerygo.jpg")}
      />
      <Text className="font-semibold text-4xl mx-9">Welcome Back!</Text>
      <Text className="mx-10 text-xl mb-10">Please sign in to continue</Text>
      <View className="w-80 mx-auto mb-10">
        {/* ADD ICONS FOR EACH FORM INPUT */}
        <FormInput
          name={"EMAIL ADDRESS"}
          Input={email}
          setInput={setEmail}
          image={userImg}
          secure={false}
          validate={() => {}}
        />
        <FormInput
          name={"PASSWORD"}
          Input={password}
          setInput={setPassword}
          image={passwordImg}
          secure={true}
          validate={() => {}}
        />
        <GestureHandlerRootView>
          <TouchableOpacity onPress={()=>{console.log("Forgot")}}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
      <Text className="mx-auto mb-2 text-[#E11D48] text-center">
        {errMessage}
      </Text>
      <SideButton buttonText="Login" onPress={onPressSignIn} />
    </SafeAreaView>
  );
};

export default SignIn;

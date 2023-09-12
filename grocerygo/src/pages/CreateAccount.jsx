import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// Import components
import BackButton from "../components/BackButton";
import FormInput from "../components/FormInput";
import AddImage from "../components/AddImage";
import Button from "../components/Button";

const CreateAccount = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
    axios
      .post("/addUser", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    console.log(username)
  }), [username]

  return (
    <SafeAreaView className="h-screen bg-[#fff4ec]">
      <KeyboardAvoidingView behavior="position">
        <BackButton navigation={navigation} />
        <Text className="font-bold text-6xl mt-4 mx-9">Create Account</Text>
        <Text className="mx-10 text-xl">Start Grocery Shopping with us.</Text>
        <AddImage />
        <View className="w-80 mx-auto mt-4 mb-8">
          <FormInput
            name='Username'
            setInput={setUsername}
          />
          <FormInput 
            name='Email'
            setInput={setEmail} 
          />
          <FormInput
            name='Password'
            setInput={setPassword}
          />
        </View>
      </KeyboardAvoidingView>
      <Button buttonText="Sign Up" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default CreateAccount;
import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// Import components
import BackButton from "../components/BackButton";
import FormInput from "../components/FormInput";
import AddImage from "../components/AddImage";
import Button from "../components/Button";

const CreateAccount = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password)
    axios
      .post("/addUser", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

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
            input={username}
            setInput={setUsername}
          />
          <FormInput 
            name='Email'
            input={email}
            setInput={setEmail} 
          />
          <FormInput
            name='Password'
            input={password}
            setInput={setPassword}
          />
        </View>
      </KeyboardAvoidingView>
      <Button buttonText="Sign Up" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default CreateAccount;